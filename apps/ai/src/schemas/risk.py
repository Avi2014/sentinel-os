from .base import BaseSchema
from .common import Confidence, RiskLevel


class RiskPrediction(BaseSchema):

    likelihood: float

    severity: float

    confidence: Confidence

    risk_level: RiskLevel