from .decision_workflow import DecisionWorkflow


class WorkflowRegistry:

    def __init__(self):

        self.workflows = {
            "decision": DecisionWorkflow(),
        }

    def get(self, workflow):

        return self.workflows[workflow]