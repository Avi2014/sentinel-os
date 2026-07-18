from .base import BaseAgent


class TimelineAgent(BaseAgent):

    def execute(self, payload):
        return {
            "events": []
        }