from .base import BasePrompt


class CorrectiveActionPrompt(BasePrompt):

    TEMPLATE = """
Based on the incident:

{context}

Generate:

Immediate actions

Preventive actions

Long-term improvements

Prioritize by urgency.
"""

    def build(self, **kwargs):
        return self.TEMPLATE.format(
            context=kwargs.get("context", "")
        )