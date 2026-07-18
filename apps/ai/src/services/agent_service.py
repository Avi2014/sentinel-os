from src.services.workflow_service import WorkflowService


class AgentService:

    def __init__(self):

        self.workflow = WorkflowService()

    def invoke(self, workflow, payload):

        return self.workflow.invoke(
            workflow,
            payload,
        )