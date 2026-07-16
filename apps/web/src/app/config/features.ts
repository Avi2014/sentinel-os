import { env } from "./env";

export const features = {
  ai: env.enableAI,

  devtools: env.enableDevtools,
};