import {
  deleteUser,
  findUserById,
  findUsers,
  updateUser,
} from "./repository.js";

import type {
  UpdateUserInput,
  UserListQuery,
} from "./types.js";

export async function listUsers(
  query: UserListQuery
) {
  return findUsers(query);
}

export async function getUserById(id: string) {
  const user = await findUserById(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export async function updateUserById(
  id: string,
  input: UpdateUserInput
) {
  const existing = await findUserById(id);

  if (!existing) {
    throw new Error("User not found");
  }

  return updateUser(id, input);
}

export async function deleteUserById(id: string) {
  const existing = await findUserById(id);

  if (!existing) {
    throw new Error("User not found");
  }

  return deleteUser(id);
}