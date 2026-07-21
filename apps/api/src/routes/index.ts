import { Router } from "express";
// import healthRoutes from "./health.routes.js";
import { alertsRouter } from "../modules/alerts/routes.js";
import { assetsRouter } from "../modules/assets/index.js";
import { authRoutes } from "../modules/auth/index.js";
import { healthRoutes } from "../modules/health/index.js";
import { incidentsRouter } from "../modules/incidents/routes.js";
import { maintenanceRouter } from "../modules/maintenance/routes.js";
import { sensorsRouter } from "../modules/sensors/index.js";
import { telemetryRouter } from "../modules/telemetry/routes.js";
import { usersRouter } from "../modules/users/index.js";

const router = Router();

router.use("/health", healthRoutes);
router.use("/auth", authRoutes);

router.use("/users", usersRouter);
router.use("/assets", assetsRouter);
router.use("/sensors", sensorsRouter);
router.use("/telemetry", telemetryRouter);

router.use("/alerts", alertsRouter);
router.use("/incidents", incidentsRouter);
router.use("/maintenance", maintenanceRouter);

export default router;