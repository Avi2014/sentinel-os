from .base import BasePrompt


class ExecutiveSummaryPrompt(BasePrompt):

    TEMPLATE = """
Summarize the following information
for executive leadership.

Context:

{context}

Include:

- Situation
- Business impact
- Operational impact
- Recommended actions

Keep concise.
"""

    def build(self, **kwargs):
        return self.TEMPLATE.format(
            context=kwargs.get("context", "")
        )