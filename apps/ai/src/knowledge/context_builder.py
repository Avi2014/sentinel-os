class ContextBuilder:
    """Transforms retrieved documents into LLM context."""

    def build(self, documents):
        return {
            "documents": documents
        }