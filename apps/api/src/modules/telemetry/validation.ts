import { z } from "zod";

export const createTelemetrySchema = z.object({
  sensorId: z.uuid(),

  value: z.coerce.string(),

  quality: z
    .string()
    .max(30)
    .optional(),

  recordedAt: z.coerce
    .date()
    .optional(),

  metadata: z
    .record(z.string(), z.unknown())
    .optional(),
});

export const updateTelemetrySchema =
  createTelemetrySchema.partial();