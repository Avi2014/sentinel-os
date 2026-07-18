import { z } from "zod";

export const createAlertSchema = z.object({
  sensorId: z.uuid(),
  telemetryId: z.uuid(),
  rule: z.string().min(1).max(100),
  severity: z
    .enum([
      "LOW",
      "MEDIUM",
      "HIGH",
      "CRITICAL",
    ])
    .optional(),
  message: z.string().min(1).max(500),
});

export const updateAlertSchema = z.object({
  severity: z
    .enum([
      "LOW",
      "MEDIUM",
      "HIGH",
      "CRITICAL",
    ])
    .optional(),

  message: z.string().max(500).optional(),

  status: z
    .enum([
      "OPEN",
      "ACKNOWLEDGED",
      "RESOLVED",
    ])
    .optional(),

  acknowledgedBy: z.uuid().optional(),

  acknowledgedAt: z.coerce.date().optional(),
});