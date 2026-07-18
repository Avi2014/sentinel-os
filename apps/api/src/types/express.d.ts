import type { JwtPayload } from "../modules/auth/types.js";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}

export {};