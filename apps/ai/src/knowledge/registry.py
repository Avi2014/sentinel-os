from .retriever import Retriever
from .context_builder import ContextBuilder


class KnowledgeRegistry:
    """Knowledge service registry."""

    def __init__(self):
        self.retriever = Retriever()
        self.context = ContextBuilder()