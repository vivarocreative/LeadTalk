# LeadTalk Backend

AI-driven conversation agent for CRM lead qualification.

## Features
- **CRM Webhooks:** Ingest leads from HubSpot, Salesforce, etc.
- **AI Conversation:** State-machine driven qualification flow.
- **Multi-channel Comms:** Support for Webhooks and SMS notifications.
- **Human Handoff:** Automatically identify and notify sales when a lead is ready.

## Setup

1. **Environment Variables:**
   Create a `.env` file or export the following:
   ```bash
   OPENAI_API_KEY=your_key_here
   OPENAI_MODEL=gpt-4o
   ```

2. **Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Database:**
   The system uses the `team-db` CLI tool for persistence. Ensure it is installed and configured.

## Running the Service

```bash
python main.py
```
The API will be available at `http://localhost:8000`.

## Deployment (Docker)

```bash
docker build -t leadtalk-backend .
docker run -p 8000:8000 --env-file .env leadtalk-backend
```

## Integration Testing

Ensure the service is running, then execute:
```bash
python test_integration.py
```
