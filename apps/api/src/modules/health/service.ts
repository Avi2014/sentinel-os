import type { HealthResponse } from "./types.js";

export class HealthService {
  getHealth(): HealthResponse {
    return {
      status: "healthy",
      service: "SentinelOS API",
      version: "0.1.0",
    };
  }
}

export const healthService = new HealthService();