import { z } from "zod";

export const createIncidentSchema = z.object({
  alertId: z.uuid(),
  title: z.string().min(1).max(200),
  description: z.string().optional(),
  severity: z
    .enum([
      "LOW",
      "MEDIUM",
      "HIGH",
      "CRITICAL",
    ])
    .optional(),
});

export const updateIncidentSchema = z.object({
  title: z.string().max(200).optional(),

  description: z.string().optional(),

  severity: z
    .enum([
      "LOW",
      "MEDIUM",
      "HIGH",
      "CRITICAL",
    ])
    .optional(),

  status: z
    .enum([
      "OPEN",
      "ASSIGNED",
      "IN_PROGRESS",
      "RESOLVED",
      "CLOSED",
    ])
    .optional(),

  assignedTo: z.uuid().optional(),

  resolvedBy: z.uuid().optional(),

  resolvedAt: z.coerce.date().optional(),
});