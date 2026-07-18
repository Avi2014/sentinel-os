import { Router } from "express";
import { healthController } from "./controller.js";

const router = Router();

router.get("/", healthController.getHealth);

export default router;