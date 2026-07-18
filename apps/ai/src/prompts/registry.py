from .incident import IncidentPrompt
from .root_cause import RootCausePrompt
from .risk import RiskPrompt
from .summary import ExecutiveSummaryPrompt
from .corrective_action import CorrectiveActionPrompt
from .handover import ShiftHandoverPrompt
from .report import ReportPrompt


class PromptRegistry:

    def __init__(self):
        self.prompts = {
            "incident": IncidentPrompt(),
            "root_cause": RootCausePrompt(),
            "risk": RiskPrompt(),
            "summary": ExecutiveSummaryPrompt(),
            "corrective_action": CorrectiveActionPrompt(),
            "handover": ShiftHandoverPrompt(),
            "report": ReportPrompt(),
        }

    def get(self, name):
        return self.prompts[name]