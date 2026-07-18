from abc import ABC, abstractmethod


class EmbeddingProvider(ABC):
    """Abstract embedding provider."""

    @abstractmethod
    def embed(self, text: str):
        raise NotImplementedError