from src.workflows.graph import create_graph


def test_graph_compile():

    graph = create_graph()

    assert graph is not None