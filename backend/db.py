import subprocess
import json
import shlex

def sql_quote(val):
    if val is None:
        return "NULL"
    if isinstance(val, bool):
        return "1" if val else "0"
    if isinstance(val, (int, float)):
        return str(val)
    # SQL escape: replace ' with '' and wrap in '
    safe_val = str(val).replace("'", "''")
    return f"'{safe_val}'"

def run_query(sql):
    # We still need to quote the whole SQL for the shell command
    cmd = ["team-db", sql]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        # Log the failed query for debugging
        print(f"FAILED QUERY: {sql}")
        raise Exception(f"Query failed: {result.stderr}")
    if not result.stdout.strip():
        return []
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError:
        return result.stdout.strip()

def insert_lead(lead_id, crm_id, crm_type, name, email, phone, status):
    sql = f"INSERT INTO leads (id, crm_id, crm_type, name, email, phone, status) VALUES ({sql_quote(lead_id)}, {sql_quote(crm_id)}, {sql_quote(crm_type)}, {sql_quote(name)}, {sql_quote(email)}, {sql_quote(phone)}, {sql_quote(status)})"
    return run_query(sql)

def get_lead(lead_id):
    sql = f"SELECT * FROM leads WHERE id = {sql_quote(lead_id)}"
    res = run_query(sql)
    return res[0] if res else None

def create_conversation(conv_id, lead_id):
    sql = f"INSERT INTO conversations (id, lead_id, stage, is_qualified) VALUES ({sql_quote(conv_id)}, {sql_quote(lead_id)}, 'Intro', 0)"
    return run_query(sql)

def get_conversation(lead_id):
    sql = f"SELECT * FROM conversations WHERE lead_id = {sql_quote(lead_id)} ORDER BY created_at DESC LIMIT 1"
    res = run_query(sql)
    return res[0] if res else None

def add_message(msg_id, conv_id, role, content):
    sql = f"INSERT INTO messages (id, conversation_id, role, content) VALUES ({sql_quote(msg_id)}, {sql_quote(conv_id)}, {sql_quote(role)}, {sql_quote(content)})"
    return run_query(sql)

def get_messages(conv_id):
    sql = f"SELECT * FROM messages WHERE conversation_id = {sql_quote(conv_id)} ORDER BY created_at ASC"
    return run_query(sql)

def update_conversation(conv_id, stage=None, summary=None, is_qualified=None):
    updates = []
    if stage: updates.append(f"stage = {sql_quote(stage)}")
    if summary: 
        updates.append(f"summary = {sql_quote(summary)}")
    if is_qualified is not None: updates.append(f"is_qualified = {1 if is_qualified else 0}")
    
    if not updates: return
    
    sql = f"UPDATE conversations SET {', '.join(updates)} WHERE id = {sql_quote(conv_id)}"
    return run_query(sql)
