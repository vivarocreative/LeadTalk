from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
import uuid
import db
import agent
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

class LeadWebhook(BaseModel):
    crm_id: str
    crm_type: str
    name: str
    email: str
    phone: str

class MessageWebhook(BaseModel):
    lead_id: str
    content: str

@app.get("/")
async def root():
    return {"message": "LeadTalk Backend API"}

@app.post("/webhooks/crm/new-lead")
async def handle_new_lead(lead: LeadWebhook):
    logger.info(f"Received new lead from {lead.crm_type}: {lead.name}")
    lead_id = str(uuid.uuid4())
    try:
        db.insert_lead(lead_id, lead.crm_id, lead.crm_type, lead.name, lead.email, lead.phone, 'New')
        # Trigger the first message
        result = await agent.process_message(lead_id, "INIT")
        return {"lead_id": lead_id, "agent_response": result}
    except Exception as e:
        logger.error(f"Error processing new lead: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/webhooks/comms/incoming")
async def handle_incoming_message(msg: MessageWebhook):
    logger.info(f"Received message from lead {msg.lead_id}: {msg.content}")
    try:
        result = await agent.process_message(msg.lead_id, msg.content)
        return {"agent_response": result}
    except Exception as e:
        logger.error(f"Error processing message: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/leads/{lead_id}")
async def get_lead_details(lead_id: str):
    lead = db.get_lead(lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    conversation = db.get_conversation(lead_id)
    messages = []
    if conversation:
        messages = db.get_messages(conversation['id'])
    return {"lead": lead, "conversation": conversation, "messages": messages}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
