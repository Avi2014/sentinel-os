import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../core/errors/api-error.js";
import { ApiResponse } from "../core/response/api-response.js";
import { logger } from "../config/logger.js";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof ApiError) {
    logger.warn({
      statusCode: err.statusCode,
      message: err.message,
    });

    res
      .status(err.statusCode)
      .json(ApiResponse.error(err.message));

    return;
  }

  logger.error(err);

  res.status(500).json(
    ApiResponse.error("Internal Server Error")
  );
}