import os

class Config:
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "your-api-key-here")
    OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4o")
    
    LLM_PROVIDER = os.getenv("LLM_PROVIDER", "openai")
    ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY", "your-anthropic-key-here")
    ANTHROPIC_MODEL = os.getenv("ANTHROPIC_MODEL", "claude-sonnet-4-20250514")
    
    TEAM_DB_PATH = "team-db" 
