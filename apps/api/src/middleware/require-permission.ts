import type {
  NextFunction,
  Request,
  Response,
} from "express";

import { hasPermission } from "../modules/authorization/index.js";

export function requirePermission(
  permission: string,
) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      if (!req.user) {
        res.status(401).json({
          success: false,
          message: "Unauthorized.",
        });
        return;
      }

      const allowed = await hasPermission(
        req.user.userId,
        permission,
      );

      if (!allowed) {
        res.status(403).json({
          success: false,
          message: "Forbidden.",
        });
        return;
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}