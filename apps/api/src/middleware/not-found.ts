import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../core/errors/api-error.js";

export function notFound(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  next(
    new ApiError(
      404,
      `Route ${req.method} ${req.originalUrl} not found`
    )
  );
}