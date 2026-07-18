from langgraph.graph import StateGraph, END

from .state import WorkflowState
from .nodes import (
    validate,
    build_context,
    retrieve_knowledge,
    reason,
    recommend,
    format_response,
)


def create_graph():

    graph = StateGraph(WorkflowState)

    graph.add_node("validate", validate)
    graph.add_node("context", build_context)
    graph.add_node("knowledge", retrieve_knowledge)
    graph.add_node("reason", reason)
    graph.add_node("recommend", recommend)
    graph.add_node("response", format_response)

    graph.set_entry_point("validate")

    graph.add_edge("validate", "context")
    graph.add_edge("context", "knowledge")
    graph.add_edge("knowledge", "reason")
    graph.add_edge("reason", "recommend")
    graph.add_edge("recommend", "response")
    graph.add_edge("response", END)

    return graph.compile()