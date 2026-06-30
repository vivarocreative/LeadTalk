import os

class Config:
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "your-api-key-here")
    OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4o")
    TEAM_DB_PATH = "team-db" 
