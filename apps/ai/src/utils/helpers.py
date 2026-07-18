from uuid import uuid4


def generate_request_id():
    return str(uuid4())