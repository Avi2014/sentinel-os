from src.services.knowledge_service import KnowledgeService


def test_knowledge_service():
    service = KnowledgeService()

    assert service.retrieve("pump failure") == []