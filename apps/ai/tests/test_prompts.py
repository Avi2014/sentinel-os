from src.prompts.registry import PromptRegistry


def test_prompt_registry():
    registry = PromptRegistry()

    prompt = registry.get("incident")

    text = prompt.build(context="Pump failure")

    assert "Pump failure" in text