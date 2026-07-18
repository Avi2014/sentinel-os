from fastapi import APIRouter

router = APIRouter(
    prefix="/decision",
    tags=["Decision"],
)