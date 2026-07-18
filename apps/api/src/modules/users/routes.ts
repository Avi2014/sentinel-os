import { Router } from "express";

import { authenticate } from "../auth/middleware.js";
import { requirePermission } from "../../middleware/require-permission.js";

import {
  deleteUserHandler,
  getUserHandler,
  listUsersHandler,
  updateUserHandler,
} from "./controller.js";

const router = Router();

router.get(
  "/",
  authenticate,
  requirePermission("users:read"),
  listUsersHandler,
);

router.get(
  "/:id",
  authenticate,
  requirePermission("users:read"),
  getUserHandler,
);

router.patch(
  "/:id",
  authenticate,
  requirePermission("users:write"),
  updateUserHandler,
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("users:write"),
  deleteUserHandler,
);

export { router as usersRouter };