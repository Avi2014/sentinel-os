from .base import BasePrompt


class ReportPrompt(BasePrompt):

    TEMPLATE = """
Generate a professional incident report.

Context:

{context}

Sections:

Overview

Timeline

Risk

Recommendations

Conclusion
"""

    def build(self, **kwargs):
        return self.TEMPLATE.format(
            context=kwargs.get("context", "")
        )