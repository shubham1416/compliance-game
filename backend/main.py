"""
Compliance Quest — Backend API (FastAPI).

Provides endpoints for login, scenario retrieval,
answer submission, leaderboard, content upload, and certificates.
"""

import os
import time
import logging
from typing import Dict, List

from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from . import ai_engine

# ── Configuration ────────────────────────────────────────
SECRET_KEY: str = os.environ.get("CG_SECRET", "dev-secret")
ALGORITHM: str = "HS256"

# ── Logging ──────────────────────────────────────────────
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

# ── App Setup ────────────────────────────────────────────
app = FastAPI(title="Compliance Quest API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Request / Response Models ────────────────────────────
class LoginRequest(BaseModel):
    """Login payload from the client."""
    username: str
    password: str = ""


class Scenario(BaseModel):
    """Schema for a single compliance scenario."""
    id: str
    question: str
    options: List[str]
    correct_index: int
    topic: str
    difficulty: int
    level: int


class SubmitAnswerRequest(BaseModel):
    """Payload when the player submits an answer."""
    user: str
    domain: str
    scenarioId: str
    selected: int
    correct: bool


class CompletionRequest(BaseModel):
    """Payload for generating a completion certificate."""
    user: str = "Player"
    domain: str = "cyber"


# ── In-Memory Data Store ─────────────────────────────────
_scenarios: List[dict] = ai_engine.generate_sample_scenarios()
_user_stats: Dict[str, dict] = {}


# ── Endpoints ────────────────────────────────────────────
@app.post("/api/login")
def login(req: LoginRequest) -> dict:
    """Authenticate user and return a JWT token."""
    try:
        from jose import jwt as jose_jwt
        token = jose_jwt.encode(
            {"sub": req.username, "iat": int(time.time())},
            SECRET_KEY,
            algorithm=ALGORITHM,
        )
    except ImportError:
        logger.warning("python-jose not installed; returning placeholder token")
        token = "placeholder-token"

    logger.info("User '%s' logged in", req.username)
    return {"access_token": token, "token_type": "bearer", "user": req.username}


@app.get("/api/scenarios")
def get_scenarios(domain: str = "cyber", level: int = 1) -> list:
    """Return scenarios filtered by domain and level."""
    results = [s for s in _scenarios if s["domain"] == domain and s["level"] == level]
    return results


@app.post("/api/submit-answer")
def submit_answer(payload: SubmitAnswerRequest) -> dict:
    """Record an answer and update the player's stats."""
    stats = _user_stats.setdefault(
        payload.user, {"correct": 0, "total": 0, "weak_topics": {}}
    )
    stats["total"] += 1

    if payload.correct:
        stats["correct"] += 1
    else:
        weak = stats["weak_topics"]
        weak[payload.domain] = weak.get(payload.domain, 0) + 1

    logger.info(
        "Answer from '%s': scenario=%s correct=%s",
        payload.user, payload.scenarioId, payload.correct,
    )
    return {"status": "ok", "stats": stats}


@app.get("/api/leaderboard")
def leaderboard() -> dict:
    """Return a sorted leaderboard of all players."""
    items = [
        {"user": user, "score": data["correct"]}
        for user, data in _user_stats.items()
    ]
    items.sort(key=lambda x: x["score"], reverse=True)
    return {"leaders": items}


@app.post("/api/upload-content")
async def upload_content(file: UploadFile = File(...)) -> dict:
    """Upload a document and generate new scenarios from it."""
    try:
        content = await file.read()
        generated = ai_engine.parse_document_and_generate_scenarios(
            content.decode("utf-8")
        )
        _scenarios.extend(generated)
        logger.info("Uploaded content generated %d new scenarios", len(generated))
        return {"generated": len(generated)}
    except Exception as exc:
        logger.error("Failed to process uploaded content: %s", exc)
        raise HTTPException(status_code=400, detail=str(exc)) from exc


@app.post("/api/complete")
def complete(payload: CompletionRequest) -> dict:
    """Generate a simple text-based completion certificate."""
    certs_dir = os.path.join(os.path.dirname(__file__), "certs")
    os.makedirs(certs_dir, exist_ok=True)

    safe_name = payload.user.replace(" ", "_")
    path = os.path.join(certs_dir, f"{safe_name}_certificate.txt")

    with open(path, "w", encoding="utf-8") as cert_file:
        cert_file.write(
            f"Certificate of Completion\n"
            f"User: {payload.user}\n"
            f"Domain: {payload.domain}\n"
        )

    logger.info("Certificate generated for '%s' at %s", payload.user, path)
    return {"status": "generated", "path": path}
