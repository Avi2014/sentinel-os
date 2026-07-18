from src.agents.registry import AgentRegistry


class AgentService:

    def __init__(self):
        self.registry = AgentRegistry()

    def invoke(self, agent_name, payload):
        agent = self.registry.get(agent_name)
        return agent.invoke(payload)