import { Router } from "express";

import { requirePermission } from "../../middleware/require-permission.js";
import { authenticate } from "../auth/middleware.js";

import {
  createTelemetryHandler,
  deleteTelemetryHandler,
  getTelemetryHandler,
  latestTelemetryHandler,
  listTelemetryHandler,
  updateTelemetryHandler,
} from "./controller.js";

const router = Router();

router.get(
  "/",
  authenticate,
  requirePermission("telemetry:read"),
  listTelemetryHandler,
);

router.get(
  "/latest/:sensorId",
  authenticate,
  requirePermission("telemetry:read"),
  latestTelemetryHandler,
);

router.get(
  "/:id",
  authenticate,
  requirePermission("telemetry:read"),
  getTelemetryHandler,
);

router.post(
  "/",
  authenticate,
  requirePermission("telemetry:write"),
  createTelemetryHandler,
);

router.patch(
  "/:id",
  authenticate,
  requirePermission("telemetry:write"),
  updateTelemetryHandler,
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("telemetry:write"),
  deleteTelemetryHandler,
);

export { router as telemetryRouter };