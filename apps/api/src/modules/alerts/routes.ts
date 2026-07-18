import { Router } from "express";

import { requirePermission } from "../../middleware/require-permission.js";
import { authenticate } from "../auth/middleware.js";

import {
  acknowledgeAlertHandler,
  createAlertHandler,
  deleteAlertHandler,
  getAlertHandler,
  listAlertsHandler,
  resolveAlertHandler,
  updateAlertHandler,
} from "./controller.js";

const router = Router();

router.get(
  "/",
  authenticate,
  requirePermission("alerts:read"),
  listAlertsHandler,
);

router.get(
  "/:id",
  authenticate,
  requirePermission("alerts:read"),
  getAlertHandler,
);

router.post(
  "/",
  authenticate,
  requirePermission("alerts:write"),
  createAlertHandler,
);

router.patch(
  "/:id",
  authenticate,
  requirePermission("alerts:write"),
  updateAlertHandler,
);

router.patch(
  "/:id/acknowledge",
  authenticate,
  requirePermission("alerts:write"),
  acknowledgeAlertHandler,
);

router.patch(
  "/:id/resolve",
  authenticate,
  requirePermission("alerts:write"),
  resolveAlertHandler,
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("alerts:write"),
  deleteAlertHandler,
);

export { router as alertsRouter };