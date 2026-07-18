import type { SignOptions } from "jsonwebtoken";
import { env } from "./env.js";

export const jwtConfig = {
  accessTokenSecret: env.JWT_ACCESS_SECRET,
  refreshTokenSecret: env.JWT_REFRESH_SECRET,

  accessTokenExpiry:
    env.JWT_ACCESS_EXPIRES_IN as SignOptions["expiresIn"],

  refreshTokenExpiry:
    env.JWT_REFRESH_EXPIRES_IN as SignOptions["expiresIn"],
} as const;