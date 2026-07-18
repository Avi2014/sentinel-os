import { z } from "zod";

export const listUsersSchema = z.object({
  page: z.coerce.number().int().positive().default(1),

  limit: z.coerce
    .number()
    .int()
    .min(1)
    .max(100)
    .default(10),

  search: z.string().optional(),
});

export const updateUserSchema = z.object({
  firstName: z.string().min(2).max(50).optional(),

  lastName: z.string().min(2).max(50).optional(),

  isActive: z.boolean().optional(),
});