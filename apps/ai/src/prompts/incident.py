from .base import BasePrompt


class IncidentPrompt(BasePrompt):

    TEMPLATE = """
You are SentinelOS AI.

Analyze the following industrial incident.

Context:
{context}

Objectives:

- Summarize incident
- Identify immediate hazards
- Highlight missing information
- Recommend next actions

Return a structured response.
"""

    def build(self, **kwargs):
        return self.TEMPLATE.format(
            context=kwargs.get("context", "")
        )