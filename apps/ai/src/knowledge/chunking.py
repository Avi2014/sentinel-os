class ChunkingStrategy:
    """Document chunking strategy."""

    DEFAULT_SIZE = 800
    DEFAULT_OVERLAP = 150

    def chunk(self, document):
        return []