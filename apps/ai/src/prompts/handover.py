from .base import BasePrompt


class ShiftHandoverPrompt(BasePrompt):

    TEMPLATE = """
Generate shift handover summary.

Context:

{context}

Include:

Open issues

Current risks

Pending work

Critical alerts

Use concise bullet points.
"""

    def build(self, **kwargs):
        return self.TEMPLATE.format(
            context=kwargs.get("context", "")
        )