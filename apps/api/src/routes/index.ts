import { Router } from "express";

import { authRoutes } from "../modules/auth/index.js";
import { assetsRouter } from "../modules/assets/index.js";
import { healthRoutes } from "../modules/health/index.js";
import { sensorsRouter } from "../modules/sensors/index.js";
import { telemetryRouter } from "../modules/telemetry/routes.js";
import { usersRouter } from "../modules/users/index.js";
import { incidentsRouter } from "../modules/incidents/routes.js";
import { alertsRouter } from "../modules/alerts/routes.js";

const router = Router();

router.use("/health", healthRoutes);
router.use("/auth", authRoutes);
router.use("/alerts", alertsRouter);
router.use("/users", usersRouter);
router.use("/assets", assetsRouter);
router.use("/telemetry", telemetryRouter);
router.use("/sensors", sensorsRouter);
router.use("/users", usersRouter);
router.use("/assets", assetsRouter);
router.use("/sensors", sensorsRouter);
router.use("/telemetry", telemetryRouter);
router.use("/alerts", alertsRouter);
router.use("/incidents", incidentsRouter);
export default router;