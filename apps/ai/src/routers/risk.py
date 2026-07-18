from fastapi import APIRouter
from src.services.agent_service import AgentService

router = APIRouter(
    prefix="/risk",
    tags=["Risk"],
)

service = AgentService()


@router.post("")
async def risk(payload: dict):
    return service.invoke("risk", payload)