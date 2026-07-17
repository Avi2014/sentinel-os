from fastapi import FastAPI

from src.api import router
from src.settings import settings

app = FastAPI(
    title=settings.APP_NAME,
    version="0.1.0"
)

app.include_router(router)