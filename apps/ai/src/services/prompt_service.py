from src.prompts.registry import PromptRegistry


class PromptService:

    def __init__(self):
        self.registry = PromptRegistry()

    def build(self, prompt_name, **kwargs):
        prompt = self.registry.get(prompt_name)
        return prompt.build(**kwargs)