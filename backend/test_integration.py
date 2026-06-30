import httpx
import asyncio
import sys

BASE_URL = "http://localhost:8000"

async def test_full_flow():
    print("Starting integration test...")
    
    async with httpx.AsyncClient() as client:
        # 1. Create Lead
        print("\nStep 1: Creating new lead via CRM webhook...")
        lead_data = {
            "crm_id": "test_crm_123",
            "crm_type": "HubSpot",
            "name": "Test User",
            "email": "test@example.com",
            "phone": "555-0000"
        }
        resp = await client.post(f"{BASE_URL}/webhooks/crm/new-lead", json=lead_data)
        if resp.status_code != 200:
            print(f"FAILED: Status {resp.status_code}, {resp.text}")
            sys.exit(1)
        
        res = resp.json()
        lead_id = res["lead_id"]
        print(f"SUCCESS: Lead created with ID {lead_id}")
        print(f"Agent Outreach: {res['agent_response']['response']}")

        # 2. Send Discovery Message
        print("\nStep 2: Sending discovery reply from lead...")
        msg_data = {
            "lead_id": lead_id,
            "content": "I'm looking for a fast sports car."
        }
        resp = await client.post(f"{BASE_URL}/webhooks/comms/incoming", json=msg_data)
        res = resp.json()
        print(f"Agent Response: {res['agent_response']['response']}")
        print(f"Stage: {res['agent_response']['stage']}")

        # 3. Send Qualification Message (trigger handoff)
        print("\nStep 3: Sending qualification reply (intent to buy)...")
        msg_data["content"] = "I want to buy one this weekend. Budget is $80k."
        resp = await client.post(f"{BASE_URL}/webhooks/comms/incoming", json=msg_data)
        res = resp.json()
        print(f"Agent Response: {res['agent_response']['response']}")
        print(f"Is Qualified: {res['agent_response']['is_qualified']}")
        print(f"Handoff Triggered: {res['agent_response']['handoff_triggered']}")

        if res['agent_response']['is_qualified'] and res['agent_response']['handoff_triggered']:
            print("\nINTEGRATION TEST PASSED!")
        else:
            print("\nINTEGRATION TEST FAILED: Qualification or Handoff not triggered correctly.")
            sys.exit(1)

        # 4. Verify Lead Details
        print("\nStep 4: Verifying lead status in DB via API...")
        resp = await client.get(f"{BASE_URL}/leads/{lead_id}")
        res = resp.json()
        if res['lead']['status'] == 'Qualified':
            print("SUCCESS: Lead status is 'Qualified'")
        else:
            print(f"FAILED: Lead status is {res['lead']['status']}")
            sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        BASE_URL = sys.argv[1]
    
    try:
        asyncio.run(test_full_flow())
    except Exception as e:
        print(f"ERROR: {e}")
        sys.exit(1)
