from abc import ABC, abstractmethod


class BasePrompt(ABC):
    """
    Base class for all reusable prompts.
    """

    @abstractmethod
    def build(self, **kwargs) -> str:
        """Return formatted prompt."""
        raise NotImplementedError