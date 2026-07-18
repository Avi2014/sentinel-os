from fastapi import APIRouter

router = APIRouter(
    prefix="/incident",
    tags=["Incident"],
)