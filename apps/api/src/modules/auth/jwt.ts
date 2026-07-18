import jwt from "jsonwebtoken";
import { jwtConfig } from "../../config/jwt.js";
import type { JwtPayload } from "./types.js";

export function generateAccessToken(payload: JwtPayload): string {
  return jwt.sign(payload, jwtConfig.accessTokenSecret, {
    expiresIn: jwtConfig.accessTokenExpiry,
  });
}

export function generateRefreshToken(payload: JwtPayload): string {
  return jwt.sign(payload, jwtConfig.refreshTokenSecret, {
    expiresIn: jwtConfig.refreshTokenExpiry,
  });
}

export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(
    token,
    jwtConfig.accessTokenSecret,
  ) as JwtPayload;
}

export function verifyRefreshToken(token: string): JwtPayload {
  return jwt.verify(
    token,
    jwtConfig.refreshTokenSecret,
  ) as JwtPayload;
}