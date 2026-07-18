from .base import BasePrompt


class RootCausePrompt(BasePrompt):

    TEMPLATE = """
You are an industrial investigation expert.

Analyze:

{context}

Determine:

- Possible causes
- Supporting evidence
- Missing evidence
- Confidence level

Avoid assumptions.

Return JSON-compatible output.
"""

    def build(self, **kwargs):
        return self.TEMPLATE.format(
            context=kwargs.get("context", "")
        )
    