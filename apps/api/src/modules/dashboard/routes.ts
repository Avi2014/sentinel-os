import { Router } from "express";

import { authenticate } from "../auth/middleware.js";
import { getDashboard } from "./controller.js";

const router = Router();

router.get("/", authenticate, getDashboard);

export default router;