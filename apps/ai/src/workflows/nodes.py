from .state import WorkflowState


def validate(state: WorkflowState):

    state["metadata"] = {
        "validated": True
    }

    return state


def build_context(state: WorkflowState):

    state["context"] = {}

    return state


def retrieve_knowledge(state: WorkflowState):

    state["knowledge"] = []

    return state


def reason(state: WorkflowState):

    state["reasoning"] = {}

    return state


def recommend(state: WorkflowState):

    state["recommendation"] = {}

    return state


def format_response(state: WorkflowState):

    state["response"] = {
        "status": "success"
    }

    return state