import type { Request, Response } from "express";
import { ApiResponse } from "../../core/response/api-response.js";
import { healthService } from "./service.js";

export class HealthController {
  getHealth(_req: Request, res: Response): void {
    const data = healthService.getHealth();

    res.json(
      ApiResponse.success(
        data,
        "Health check successful"
      )
    );
  }
}

export const healthController = new HealthController();