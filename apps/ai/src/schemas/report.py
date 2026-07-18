from .base import BaseSchema


class ExecutiveReport(BaseSchema):

    title: str

    overview: str

    findings: str

    recommendations: str

    conclusion: str