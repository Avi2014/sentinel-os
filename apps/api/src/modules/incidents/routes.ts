import { Router } from "express";

import { requirePermission } from "../../middleware/require-permission.js";
import { authenticate } from "../auth/middleware.js";

import {
  closeIncidentHandler,
  createIncidentHandler,
  deleteIncidentHandler,
  getIncidentHandler,
  listIncidentsHandler,
  resolveIncidentHandler,
  updateIncidentHandler,
} from "./controller.js";

const router = Router();

router.get(
  "/",
  authenticate,
  requirePermission("incidents:read"),
  listIncidentsHandler,
);

router.get(
  "/:id",
  authenticate,
  requirePermission("incidents:read"),
  getIncidentHandler,
);

router.post(
  "/",
  authenticate,
  requirePermission("incidents:write"),
  createIncidentHandler,
);

router.patch(
  "/:id",
  authenticate,
  requirePermission("incidents:write"),
  updateIncidentHandler,
);

router.patch(
  "/:id/resolve",
  authenticate,
  requirePermission("incidents:write"),
  resolveIncidentHandler,
);

router.patch(
  "/:id/close",
  authenticate,
  requirePermission("incidents:write"),
  closeIncidentHandler,
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("incidents:write"),
  deleteIncidentHandler,
);

export { router as incidentsRouter };