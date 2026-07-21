import { z } from "zod";

export const createMaintenanceSchema =
  z.object({
    assetId: z.uuid(),

    incidentId: z.uuid().optional(),

    title: z.string().min(1).max(200),

    description: z.string().optional(),

    type: z
      .enum([
        "PREVENTIVE",
        "CORRECTIVE",
      ])
      .optional(),

    priority: z
      .enum([
        "LOW",
        "MEDIUM",
        "HIGH",
        "CRITICAL",
      ])
      .optional(),

    scheduledAt: z.coerce
      .date()
      .optional(),
  });

export const updateMaintenanceSchema =
  z.object({
    title: z
      .string()
      .max(200)
      .optional(),

    description: z
      .string()
      .optional(),

    type: z
      .enum([
        "PREVENTIVE",
        "CORRECTIVE",
      ])
      .optional(),

    priority: z
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
        "COMPLETED",
        "CANCELLED",
      ])
      .optional(),

    assignedTo: z
      .uuid()
      .optional(),

    scheduledAt: z.coerce
      .date()
      .optional(),

    completedAt: z.coerce
      .date()
      .optional(),

    notes: z
      .string()
      .optional(),
  });