import { toAuthResponse } from "./dto.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "./jwt.js";
import {
  hashPassword,
  verifyPassword,
} from "./password.js";
import {
  assignRoleToUser,
  createUser,
  findRoleByName,
  findUserByEmail,
} from "./repository.js";

import type {
  LoginInput,
  RegisterInput,
} from "./validation.js";

export async function register(
  data: RegisterInput,
) {
  const existingUser = await findUserByEmail(data.email);

  if (existingUser) {
    throw new Error("User already exists.");
  }

  const role = await findRoleByName("Admin");

  if (!role) {
    throw new Error("Default role 'Admin' not found.");
  }

  const passwordHash = await hashPassword(
    data.password,
  );

  const user = await createUser(
    data,
    passwordHash,
  );

  await assignRoleToUser(user.id, role.id);

  const payload = {
    userId: user.id,
    organizationId: user.organizationId,
    email: user.email,
  };

  const accessToken =
    generateAccessToken(payload);

  const refreshToken =
    generateRefreshToken(payload);

  return toAuthResponse(
    user,
    accessToken,
    refreshToken,
    "Registration successful",
  );
}

export async function login(
  data: LoginInput,
) {
  const user = await findUserByEmail(
    data.email,
  );

  if (!user) {
    throw new Error("Invalid credentials.");
  }

  const validPassword =
    await verifyPassword(
      data.password,
      user.passwordHash,
    );

  if (!validPassword) {
    throw new Error("Invalid credentials.");
  }

  const payload = {
    userId: user.id,
    organizationId: user.organizationId,
    email: user.email,
  };

  const accessToken =
    generateAccessToken(payload);

  const refreshToken =
    generateRefreshToken(payload);

  return toAuthResponse(
    user,
    accessToken,
    refreshToken,
    "Login successful",
  );
}