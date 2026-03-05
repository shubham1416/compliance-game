from fastapi import FastAPI, Depends, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from jose import jwt
import time, os
from . import ai_engine

SECRET_KEY = os.environ.get('CG_SECRET','dev-secret')

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'], allow_headers=['*'])

class LoginReq(BaseModel):
    username: str
    password: str = ''

class Scenario(BaseModel):
    id: str
    question: str
    options: List[str]
    correct_index: int
    topic: str
    difficulty: int
    level: int

_scenarios = ai_engine.generate_sample_scenarios()
_user_stats = {}

@app.post('/api/login')
def login(req: LoginReq):
    token = jwt.encode({'sub':req.username,'iat':int(time.time())}, SECRET_KEY, algorithm='HS256')
    return {'access_token':token,'token_type':'bearer','user':req.username}

@app.get('/api/scenarios')
def get_scenarios(domain: str='cyber', level: int=1):
    results = [s for s in _scenarios if s['domain']==domain and s['level']==level]
    return results

class Submit(BaseModel):
    user: str
    domain: str
    scenarioId: str
    selected: int
    correct: bool

@app.post('/api/submit-answer')
def submit_answer(payload: Submit):
    stats = _user_stats.setdefault(payload.user, {'correct':0,'total':0,'weak_topics':{}})
    stats['total'] += 1
    if payload.correct: stats['correct'] += 1
    # track weak topics for adaptive engine (very simple)
    if not payload.correct:
        t = stats['weak_topics'].setdefault(payload.domain,0); stats['weak_topics'][payload.domain]=t+1
    return {'status':'ok','stats':stats}

@app.get('/api/leaderboard')
def leaderboard():
    # simple ordering by correct
    items = [{'user':u,'score':v['correct']} for u,v in _user_stats.items()]
    items.sort(key=lambda x: x['score'], reverse=True)
    return {'leaders':items}

@app.post('/api/upload-content')
async def upload_content(file: UploadFile = File(...)):
    content = await file.read()
    # placeholder: parse file and generate scenarios
    generated = ai_engine.parse_document_and_generate_scenarios(content.decode('utf-8'))
    _scenarios.extend(generated)
    return {'generated':len(generated)}

@app.post('/api/complete')
def complete(payload: dict):
    # create a simple certificate file
    name = payload.get('user','Player')
    certs_dir = os.path.join(os.path.dirname(__file__),'certs')
    os.makedirs(certs_dir, exist_ok=True)
    path = os.path.join(certs_dir, f"{name.replace(' ','_')}_certificate.txt")
    with open(path,'w') as f:
        f.write(f"Certificate of Completion\nUser: {name}\nDomain: {payload.get('domain')}\n")
    return {'status':'generated','path':path}
