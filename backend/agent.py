import shlex
import uuid
import db
import json
import httpx
import logging
from config import Config
from comms import CommsFactory

logger = logging.getLogger(__name__)

async def process_message(lead_id, message_content):
    lead = db.get_lead(lead_id)
    if not lead:
        return {"error": "Lead not found."}

    conversation = db.get_conversation(lead_id)
    if not conversation:
        conv_id = str(uuid.uuid4())
        db.create_conversation(conv_id, lead_id)
        conversation = db.get_conversation(lead_id)
    
    conv_id = conversation['id']
    
    # Add user message (unless it's the INIT trigger)
    if message_content != "INIT":
        db.add_message(str(uuid.uuid4()), conv_id, 'user', message_content)
    
    # Get all messages for context
    history = db.get_messages(conv_id)
    
    # Call real LLM
    response_data = await call_llm(lead, conversation, history)
    
    response_text = response_data.get("response_text", "I'm not sure how to respond.")
    is_qualified = response_data.get("is_qualified", False)
    summary = response_data.get("summary", "")
    next_stage = response_data.get("next_stage", conversation['stage'])

    # Add AI message
    db.add_message(str(uuid.uuid4()), conv_id, 'ai', response_text)
    
    # Update conversation state
    db.update_conversation(conv_id, stage=next_stage, summary=summary, is_qualified=is_qualified)
    
    # If qualified, trigger handoff
    handoff_triggered = False
    if is_qualified and not conversation.get('is_qualified'):
        handle_handoff(lead, summary)
        handoff_triggered = True

    # Send message via comms layer
    comms = CommsFactory.get_provider("webhook")
    comms.send_message(lead['phone'] or lead['email'], response_text)
    
    return {
        "response": response_text,
        "is_qualified": is_qualified,
        "handoff_triggered": handoff_triggered,
        "stage": next_stage
    }

async def call_llm(lead, conversation, history):
    system_prompt = f"""You are LeadTalk, an AI sales assistant for a car dealership.
Your goal is to qualify inbound leads by asking about their needs, budget, and timeline.
Conversation Stage: {conversation['stage']}
Lead Info: Name: {lead['name']}, CRM: {lead['crm_type']}

Respond in structured JSON format with the following keys:
- response_text: Your message to the lead.
- is_qualified: Boolean, true if they have shared their needs, budget, and want to buy soon.
- summary: A brief summary of what they want.
- next_stage: One of 'Intro', 'Discovery', 'Qualification', 'Finished'.
"""

    messages = [{"role": "system", "content": system_prompt}]
    for msg in history:
        role = "assistant" if msg['role'] == 'ai' else "user"
        messages.append({"role": role, "content": msg['content']})

    try:
        if Config.OPENAI_API_KEY == "your-api-key-here":
            return mock_llm_logic(lead, conversation, history)
            
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.openai.com/v1/chat/completions",
                headers={"Authorization": f"Bearer {Config.OPENAI_API_KEY}"},
                json={
                    "model": Config.OPENAI_MODEL,
                    "messages": messages,
                    "response_format": { "type": "json_object" }
                },
                timeout=30.0
            )
            response.raise_for_status()
            content = response.json()['choices'][0]['message']['content']
            return json.loads(content)
    except Exception as e:
        logger.error(f"LLM call failed: {e}")
        return mock_llm_logic(lead, conversation, history)

def mock_llm_logic(lead, conversation, history):
    last_msg = history[-1]['content'] if history else ""
    if conversation['stage'] == 'Intro':
        return {
            "response_text": f"Hi {lead['name']}! I'm LeadTalk. I saw you're interested in a car from {lead['crm_type']}. What are you looking for?",
            "is_qualified": False,
            "summary": "Just started",
            "next_stage": "Discovery"
        }
    elif "buy" in last_msg.lower():
        return {
            "response_text": "That's great! You sound ready. I'll have a specialist contact you.",
            "is_qualified": True,
            "summary": "Wants to buy soon",
            "next_stage": "Finished"
        }
    return {
        "response_text": "Tell me more about your budget and when you'd like to get the car.",
        "is_qualified": False,
        "summary": "In discovery",
        "next_stage": "Qualification"
    }

def handle_handoff(lead, summary):
    logger.info(f"!!! HANDOFF TRIGGERED !!! Lead: {lead['name']} ({lead['id']}). Summary: {summary}")
    db.run_query(f"UPDATE leads SET status = 'Qualified' WHERE id = {db.sql_quote(lead['id'])}")
    print(f"NOTIFICATION: Lead {lead['name']} is ready! Summary: {summary}")
