from .base import BaseSchema


class ExecutiveSummary(BaseSchema):

    summary: str

    operational_impact: str

    business_impact: str

    next_steps: str