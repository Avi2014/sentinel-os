from src.agents.registry import AgentRegistry


def test_registry_contains_agents():
    registry = AgentRegistry()

    assert "decision" in registry.all()
    assert "risk" in registry.all()
    assert "timeline" in registry.all()
    assert "knowledge" in registry.all()
    assert "report" in registry.all()