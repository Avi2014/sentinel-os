from abc import ABC, abstractmethod


class VectorStore(ABC):
    """Abstract vector database interface."""

    @abstractmethod
    def add(self, documents):
        raise NotImplementedError

    @abstractmethod
    def delete(self, ids):
        raise NotImplementedError

    @abstractmethod
    def search(self, embedding):
        raise NotImplementedError