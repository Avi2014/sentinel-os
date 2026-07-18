from fastapi import FastAPI

from src.routers import (
    health,
    decision,
    risk,
    incident,
    report,
)

app = FastAPI(
    title="SentinelOS AI"
)

app.include_router(health.router)
app.include_router(decision.router)
app.include_router(risk.router)
app.include_router(incident.router)
app.include_router(report.router)