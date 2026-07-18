from .base import BaseAgent


class RiskAgent(BaseAgent):

    def execute(self, payload):
        return {
            "risk_level": None,
            "confidence": 0,
        }