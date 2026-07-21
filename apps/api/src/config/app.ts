import { env } from "./env.js";
import swaggerUi from "swagger-ui-express";

import { swaggerSpec } from "./swagger.js";
export const appConfig = {
  name: "SentinelOS API",
  version: "0.1.0",
  environment: env.NODE_ENV,
  port: env.PORT,
  apiPrefix: env.API_PREFIX,
  apiVersion: env.API_VERSION,
} as const;