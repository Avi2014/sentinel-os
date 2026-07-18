from enum import Enum
from pydantic import Field

from .base import BaseSchema


class RiskLevel(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class Confidence(BaseSchema):
    score: float = Field(ge=0, le=1)