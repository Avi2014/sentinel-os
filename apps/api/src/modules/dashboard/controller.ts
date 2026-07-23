import type { Request, Response, NextFunction } from "express";

import { toDashboardDto } from "./dto.js";
import { getDashboardOverview } from "./service.js";

export async function getDashboard(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const dashboard = await getDashboardOverview();

    res.status(200).json(toDashboardDto(dashboard));
  } catch (error) {
    next(error);
  }
}