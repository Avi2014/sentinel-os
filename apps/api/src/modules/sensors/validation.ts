import { z } from "zod";

export const createSensorSchema = z.object({
  assetId: z.uuid(),
  sensorCode: z.string().min(1).max(100),
  name: z.string().min(1).max(150),
  type: z.string().min(1).max(100),

  manufacturer: z.string().max(100).optional(),
  model: z.string().max(100).optional(),
  unit: z.string().max(30).optional(),

  status: z.string().max(50).optional(),

  installationDate: z.coerce.date().optional(),

  location: z.string().max(255).optional(),

  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const updateSensorSchema =
  createSensorSchema.partial();