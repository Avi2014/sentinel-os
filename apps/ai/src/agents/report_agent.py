from .base import BaseAgent


class ReportAgent(BaseAgent):

    def execute(self, payload):
        return {
            "summary": None
        }