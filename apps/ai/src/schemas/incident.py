from typing import List

from .base import BaseSchema


class IncidentSummary(BaseSchema):

    incident_id: str

    summary: str

    hazards: List[str]

    missing_information: List[str]