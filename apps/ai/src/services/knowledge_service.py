from src.knowledge.registry import KnowledgeRegistry


class KnowledgeService:
    """Facade for future RAG operations."""

    def __init__(self):
        self.registry = KnowledgeRegistry()

    def retrieve(self, query: str):
        return self.registry.retriever.retrieve(query)

    def build_context(self, docs):
        return self.registry.context.build(docs)