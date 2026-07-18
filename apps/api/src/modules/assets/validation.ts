import { z } from "zod";

export const createAssetSchema = z.object({
  name: z.string().min(2).max(150),

  assetCode: z.string().min(2).max(100),

  category: z.string().min(2).max(100),

  location: z.string().max(255).optional(),

  status: z.string().max(50).optional(),

  description: z.string().optional(),
});

export const updateAssetSchema =
  createAssetSchema.partial();

export type CreateAssetInput = z.infer<
  typeof createAssetSchema
>;

export type UpdateAssetInput = z.infer<
  typeof updateAssetSchema
>;