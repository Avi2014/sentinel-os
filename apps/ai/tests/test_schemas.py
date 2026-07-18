from src.schemas.decision import DecisionRequest


def test_request_schema():

    request = DecisionRequest(
        incident_id="INC-001",
        context="Pump failure"
    )

    assert request.incident_id == "INC-001"