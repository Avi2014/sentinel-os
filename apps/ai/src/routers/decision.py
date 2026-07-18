from fastapi import APIRouter
from src.services.agent_service import AgentService

router = APIRouter(
    prefix="/decision",
    tags=["Decision"],
)

service = AgentService()


@router.post("")
async def decision(payload: dict):
    return service.invoke("decision", payload)