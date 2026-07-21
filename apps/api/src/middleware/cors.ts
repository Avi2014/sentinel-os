import cors from "cors";

import { env } from "../config/index.js";

const origins =
  env.CORS_ORIGIN === "*"
    ? true
    : env.CORS_ORIGIN.split(",").map((origin) =>
        origin.trim(),
      );

export const corsMiddleware = cors({
  origin: origins,

  credentials: true,

  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
  ],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],
});