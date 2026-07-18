from .base import BaseSchema


class HealthResponse(BaseSchema):

    status: str

    service: str

    version: str