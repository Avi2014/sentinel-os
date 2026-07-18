from .base import BaseAgent


class DecisionAgent(BaseAgent):

    def execute(self, payload):
        return {
            "status": "pending",
            "decision": None,
        }