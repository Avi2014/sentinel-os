from .decision_agent import DecisionAgent
from .risk_agent import RiskAgent
from .timeline_agent import TimelineAgent
from .knowledge_agent import KnowledgeAgent
from .report_agent import ReportAgent


class AgentRegistry:

    def __init__(self):
        self._agents = {
            "decision": DecisionAgent(),
            "risk": RiskAgent(),
            "timeline": TimelineAgent(),
            "knowledge": KnowledgeAgent(),
            "report": ReportAgent(),
        }

    def get(self, name: str):
        return self._agents[name]

    def all(self):
        return self._agents