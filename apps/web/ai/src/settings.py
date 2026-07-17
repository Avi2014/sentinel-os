from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "SentinelOS AI"
    ENV: str = "development"
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    GOOGLE_API_KEY: str = ""

    class Config:
        env_file = ".env"


settings = Settings()