from .base import BaseAgent


class KnowledgeAgent(BaseAgent):

    def execute(self, payload):
        return {
            "documents": []
        }