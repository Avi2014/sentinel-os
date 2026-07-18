import { eq } from "drizzle-orm";

import { db } from "../../database/index.js";
import {
  roles,
  userRoles,
  users,
} from "../../database/schema/index.js";

import type { RegisterInput } from "./validation.js";

export async function findUserByEmail(email: string) {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  return user ?? null;
}

export async function findUserById(id: string) {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, id));

  return user ?? null;
}

export async function findRoleByName(name: string) {
  const [role] = await db
    .select()
    .from(roles)
    .where(eq(roles.name, name));

  return role ?? null;
}

export async function createUser(
  data: RegisterInput,
  passwordHash: string,
) {
  const [user] = await db
    .insert(users)
    .values({
      organizationId: data.organizationId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      passwordHash,
    })
    .returning();

  return user;
}

export async function assignRoleToUser(
  userId: string,
  roleId: string,
) {
  await db.insert(userRoles).values({
    userId,
    roleId,
  });
}