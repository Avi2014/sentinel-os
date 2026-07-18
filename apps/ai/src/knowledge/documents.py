from dataclasses import dataclass
from typing import Dict


@dataclass
class KnowledgeDocument:
    id: str
    text: str
    metadata: Dict