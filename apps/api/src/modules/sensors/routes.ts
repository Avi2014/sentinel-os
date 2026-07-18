import { Router } from "express";

import { requirePermission } from "../../middleware/require-permission.js";
import { authenticate } from "../auth/middleware.js";

import {
  createSensorHandler,
  deleteSensorHandler,
  getSensorHandler,
  listSensorsHandler,
  updateSensorHandler,
} from "./controller.js";

const router = Router();

router.get(
  "/",
  authenticate,
  requirePermission("sensors:read"),
  listSensorsHandler,
);

router.get(
  "/:id",
  authenticate,
  requirePermission("sensors:read"),
  getSensorHandler,
);

router.post(
  "/",
  authenticate,
  requirePermission("sensors:write"),
  createSensorHandler,
);

router.patch(
  "/:id",
  authenticate,
  requirePermission("sensors:write"),
  updateSensorHandler,
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("sensors:write"),
  deleteSensorHandler,
);

export { router as sensorsRouter };