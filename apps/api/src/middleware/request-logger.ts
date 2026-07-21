import type {
  NextFunction,
  Request,
  Response,
} from "express";

import { logger } from "../config/index.js";

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const start = Date.now();

  res.on("finish", () => {
    logger.info({
      requestId: req.headers["x-request-id"],
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      responseTime: `${Date.now() - start}ms`,
      ip: req.ip,
    });
  });

  next();
}