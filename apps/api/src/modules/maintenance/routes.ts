import { Router } from "express";

import { requirePermission } from "../../middleware/require-permission.js";
import { authenticate } from "../auth/middleware.js";

import {
  completeMaintenanceWorkOrderHandler,
  createMaintenanceWorkOrderHandler,
  deleteMaintenanceWorkOrderHandler,
  getMaintenanceWorkOrderHandler,
  listMaintenanceWorkOrdersHandler,
  updateMaintenanceWorkOrderHandler,
} from "./controller.js";

const router = Router();

router.get(
  "/",
  authenticate,
  requirePermission("maintenance:read"),
  listMaintenanceWorkOrdersHandler,
);

router.get(
  "/:id",
  authenticate,
  requirePermission("maintenance:read"),
  getMaintenanceWorkOrderHandler,
);

router.post(
  "/",
  authenticate,
  requirePermission("maintenance:write"),
  createMaintenanceWorkOrderHandler,
);

router.patch(
  "/:id",
  authenticate,
  requirePermission("maintenance:write"),
  updateMaintenanceWorkOrderHandler,
);

router.patch(
  "/:id/complete",
  authenticate,
  requirePermission("maintenance:write"),
  completeMaintenanceWorkOrderHandler,
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("maintenance:write"),
  deleteMaintenanceWorkOrderHandler,
);

export { router as maintenanceRouter };