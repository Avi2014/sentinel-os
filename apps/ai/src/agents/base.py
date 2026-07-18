from abc import ABC, abstractmethod


class BaseAgent(ABC):

    @abstractmethod
    def execute(self, payload):
        """Execute the agent."""
        pass