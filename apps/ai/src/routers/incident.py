from fastapi import APIRouter

router = APIRouter(
    prefix="/incident",
    tags=["Incident"],
)


@router.post("")
async def incident(payload: dict):
    return {
        "status": "pending",
        "payload": payload,
    }