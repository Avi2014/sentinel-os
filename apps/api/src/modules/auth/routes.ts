import { Router } from "express";

import {
  loginController,
  registerController,
} from "./controller.js";
import { authenticate } from "./middleware.js";
import { meController } from "./me.js";

const router = Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get(
  "/me",
  authenticate,
  meController,
);

export default router;