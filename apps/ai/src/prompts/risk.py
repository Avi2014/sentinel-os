from .base import BasePrompt


class RiskPrompt(BasePrompt):

    TEMPLATE = """
Evaluate operational risk.

Incident:

{context}

Provide:

- Hazard list
- Likelihood
- Severity
- Overall risk
- Mitigation recommendations

Return structured output.
"""

    def build(self, **kwargs):
        return self.TEMPLATE.format(
            context=kwargs.get("context", "")
        )