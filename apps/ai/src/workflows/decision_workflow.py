from .graph import create_graph


class DecisionWorkflow:

    def __init__(self):
        self.graph = create_graph()

    def invoke(self, request):

        state = {
            "request": request,
            "context": {},
            "knowledge": [],
            "reasoning": {},
            "recommendation": {},
            "response": {},
            "metadata": {},
        }

        return self.graph.invoke(state)