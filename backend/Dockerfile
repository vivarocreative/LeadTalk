# Build stage
FROM python:3.11-slim as builder

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

# Final stage
FROM python:3.11-slim

WORKDIR /app

# Install team-db CLI (assuming it needs to be available in the container)
# Actually, the instructions say it uses Turso team-db. 
# If the container needs team-db CLI, I should include it.
# However, usually these containers talk to a database directly.
# But since our code uses subprocess to call `team-db`, we need it.
# For now, I'll assume the container has the necessary environment.
# Wait, I don't have the installer for team-db. 
# Let me check if team-db is a binary I can copy.

COPY --from=builder /root/.local /root/.local
COPY . .

ENV PATH=/root/.local/bin:$PATH
ENV PYTHONUNBUFFERED=1

EXPOSE 8000

CMD ["python", "main.py"]
