import type {
  NextFunction,
  Request,
  Response,
} from "express";

import { verifyAccessToken } from "./jwt.js";

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authorization =
    req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({
      success: false,
      message: "Authorization header is missing.",
    });
  }

  const [scheme, token] =
    authorization.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({
      success: false,
      message: "Invalid authorization header.",
    });
  }

  try {
    const payload =
      verifyAccessToken(token);

    req.user = payload;

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
}