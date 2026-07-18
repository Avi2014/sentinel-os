from typing import TypedDict, Any


class WorkflowState(TypedDict):
    request: dict
    context: dict
    knowledge: list
    reasoning: dict
    recommendation: dict
    response: dict
    metadata: dict