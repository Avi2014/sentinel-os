import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  PORT: z.coerce.number().default(3001),

  API_PREFIX: z.string().default("/api"),

  API_VERSION: z.string().default("v1"),

LOG_LEVEL: z.enum([
  "fatal",
  "error",
  "warn",
  "info",
  "debug",
  "trace",
  "silent",
]).default("info"),

DATABASE_URL: z.string().url(),

  // ==========================
  // JWT Configuration
  // ==========================

  JWT_ACCESS_SECRET: z.string().min(32),

  JWT_REFRESH_SECRET: z.string().min(32),

  JWT_ACCESS_EXPIRES_IN: z.string(),

  JWT_REFRESH_EXPIRES_IN: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid environment configuration");
  console.error(parsed.error.format());
  process.exit(1);
}

export const env = Object.freeze(parsed.data);