import { Router } from "express";

import { requirePermission } from "../../middleware/require-permission.js";
import { authenticate } from "../auth/middleware.js";

import {
  createAssetHandler,
  deleteAssetHandler,
  getAssetHandler,
  listAssetsHandler,
  updateAssetHandler,
} from "./controller.js";

const router = Router();

router.get(
  "/",
  authenticate,
  requirePermission("assets:read"),
  listAssetsHandler,
);

router.get(
  "/:id",
  authenticate,
  requirePermission("assets:read"),
  getAssetHandler,
);

router.post(
  "/",
  authenticate,
  requirePermission("assets:write"),
  createAssetHandler,
);

router.patch(
  "/:id",
  authenticate,
  requirePermission("assets:write"),
  updateAssetHandler,
);

router.delete(
  "/:id",
  authenticate,
  requirePermission("assets:write"),
  deleteAssetHandler,
);

export { router as assetsRouter };