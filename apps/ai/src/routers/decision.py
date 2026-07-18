from fastapi import APIRouter

from src.schemas.decision import (
    DecisionRequest,
    DecisionResponse,
)

router = APIRouter(
    prefix="/decision",
    tags=["Decision"],
)


@router.post(
    "",
    response_model=DecisionResponse,
)
async def decision(
    request: DecisionRequest,
):

    return DecisionResponse(
        decision="Pending",
        confidence={
            "score": 0.0
        },
        risk_level="low",
        recommendations=[],
        reasoning="Workflow placeholder",
    )