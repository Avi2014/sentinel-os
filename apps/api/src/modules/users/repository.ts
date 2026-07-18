import { count, eq, ilike, or } from "drizzle-orm";

import { db } from "../../database/client.js";
import { users } from "../../database/schema/user.js";

import type { UpdateUserInput, UserListQuery } from "./types.js";

export async function findUsers(query: UserListQuery) {
  const { page, limit, search } = query;

  const offset = (page - 1) * limit;

  const where = search
    ? or(
        ilike(users.firstName, `%${search}%`),
        ilike(users.lastName, `%${search}%`),
        ilike(users.email, `%${search}%`)
      )
    : undefined;

  const result = await db
    .select({
      id: users.id,
      organizationId: users.organizationId,
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
      isActive: users.isActive,
      createdAt: users.createdAt,
      updatedAt: users.updatedAt,
    })
    .from(users)
    .where(where)
    .limit(limit)
    .offset(offset);

  const [{ total }] = await db
    .select({
      total: count(),
    })
    .from(users)
    .where(where);

  return {
    users: result,
    total,
    page,
    limit,
  };
}

export async function findUserById(id: string) {
  const result = await db
    .select({
      id: users.id,
      organizationId: users.organizationId,
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
      isActive: users.isActive,
      createdAt: users.createdAt,
      updatedAt: users.updatedAt,
    })
    .from(users)
    .where(eq(users.id, id))
    .limit(1);

  return result[0] ?? null;
}

export async function updateUser(
  id: string,
  input: UpdateUserInput
) {
  const result = await db
    .update(users)
    .set({
      ...input,
      updatedAt: new Date(),
    })
    .where(eq(users.id, id))
    .returning({
      id: users.id,
      organizationId: users.organizationId,
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
      isActive: users.isActive,
      createdAt: users.createdAt,
      updatedAt: users.updatedAt,
    });

  return result[0] ?? null;
}

export async function deleteUser(id: string) {
  const result = await db
    .delete(users)
    .where(eq(users.id, id))
    .returning({
      id: users.id,
      organizationId: users.organizationId,
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
      isActive: users.isActive,
      createdAt: users.createdAt,
      updatedAt: users.updatedAt,
    });

  return result[0] ?? null;
}