import type { Request, Response, NextFunction } from "express";

import {
  deleteUserById,
  getUserById,
  listUsers,
  updateUserById,
} from "./service.js";

import {
  listUsersSchema,
  updateUserSchema,
} from "./validation.js";

interface UserParams {
  id: string;
}

export async function listUsersHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const query = listUsersSchema.parse(req.query);

    const result = await listUsers(query);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function getUserHandler(
  req: Request<UserParams>,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await getUserById(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function updateUserHandler(
  req: Request<UserParams>,
  res: Response,
  next: NextFunction
) {
  try {
    const body = updateUserSchema.parse(req.body);

    const result = await updateUserById(
      req.params.id,
      body
    );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function deleteUserHandler(
  req: Request<UserParams>,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await deleteUserById(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}