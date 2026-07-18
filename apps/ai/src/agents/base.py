from abc import ABC, abstractmethod
from typing import Any


class BaseAgent(ABC):
    """
    Base class for every SentinelOS AI agent.
    """

    name: str

    def __init__(self):
        self.name = self.__class__.__name__

    def validate(self, payload: Any) -> None:
        """Validate incoming payload."""
        return

    @abstractmethod
    def execute(self, payload: Any) -> Any:
        """Core agent execution."""
        raise NotImplementedError

    def format_response(self, result: Any) -> dict:
        """Standard response wrapper."""
        return {
            "agent": self.name,
            "result": result,
        }

    def invoke(self, payload: Any) -> dict:
        self.validate(payload)
        result = self.execute(payload)
        return self.format_response(result)