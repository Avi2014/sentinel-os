from src.workflows.registry import WorkflowRegistry


class WorkflowService:

    def __init__(self):

        self.registry = WorkflowRegistry()

    def invoke(self, workflow, request):

        graph = self.registry.get(workflow)

        return graph.invoke(request)