import { Router } from "express";

import {
  deleteUserHandler,
  getUserHandler,
  listUsersHandler,
  updateUserHandler,
} from "./controller.js";

const router = Router();

router.get("/", listUsersHandler);

router.get("/:id", getUserHandler);

router.patch("/:id", updateUserHandler);

router.delete("/:id", deleteUserHandler);

export { router as usersRouter };