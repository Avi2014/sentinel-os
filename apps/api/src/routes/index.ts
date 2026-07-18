import { Router } from "express";

import { authRoutes } from "../modules/auth/index.js";
import { healthRoutes } from "../modules/health/index.js";
import { usersRouter } from "../modules/users/index.js";

const router = Router();

router.use("/health", healthRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRouter);

export default router;