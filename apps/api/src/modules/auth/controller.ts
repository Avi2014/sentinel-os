import type { Request, Response } from "express";

import { login, register } from "./service.js";
import {
  loginSchema,
  registerSchema,
} from "./validation.js";

export async function registerController(
  req: Request,
  res: Response,
) {
  const data = registerSchema.parse(req.body);

  const result = await register(data);

  return res.status(201).json(result);
}

export async function loginController(
  req: Request,
  res: Response,
) {
  const data = loginSchema.parse(req.body);

  const result = await login(data);

  return res.status(200).json(result);
}