import type { Request, Response } from "express";

import { db } from "../database/index.js";
import { sql } from "drizzle-orm";

export async function health(
  _req: Request,
  res: Response,
): Promise<void> {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}

export async function ready(
  _req: Request,
  res: Response,
): Promise<void> {
  try {
    await db.execute(sql`SELECT 1`);

    res.status(200).json({
      status: "ready",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch {
    res.status(503).json({
      status: "not_ready",
      database: "disconnected",
      timestamp: new Date().toISOString(),
    });
  }
}