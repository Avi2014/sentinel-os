from typing import List

from pydantic import Field

from .base import BaseSchema
from .common import Confidence, RiskLevel


class DecisionRequest(BaseSchema):

    incident_id: str

    context: str


class DecisionResponse(BaseSchema):

    decision: str

    confidence: Confidence

    risk_level: RiskLevel

    recommendations: List[str] = Field(default_factory=list)

    reasoning: str