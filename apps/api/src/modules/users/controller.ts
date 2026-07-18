import type {
  NextFunction,
  Request,
  Response,
} from "express";

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

export async function listUsersHandler(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const query = listUsersSchema.parse(req.query);

    const result = await listUsers(query);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function getUserHandler(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const id = req.params.id as string;

    const result = await getUserById(id);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function updateUserHandler(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const id = req.params.id as string;

    const body = updateUserSchema.parse(req.body);

    const result = await updateUserById(
      id,
      body,
    );

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function deleteUserHandler(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const id = req.params.id as string;

    const result = await deleteUserById(id);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}