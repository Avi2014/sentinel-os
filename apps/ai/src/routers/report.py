from fastapi import APIRouter
from src.services.agent_service import AgentService

router = APIRouter(
    prefix="/report",
    tags=["Report"],
)

service = AgentService()


@router.post("")
async def report(payload: dict):
    return service.invoke("report", payload)