import { and, count, desc, eq, ilike, or } from "drizzle-orm";

import { db } from "../../database/index.js";
import { assets } from "../../database/schema/index.js";

import type { AssetFilters } from "./types.js";

export async function findAll(filters: AssetFilters) {
  const { page, limit, search, organizationId } = filters;

  const offset = (page - 1) * limit;

  const conditions = [
    eq(assets.organizationId, organizationId),
  ];

  if (search) {
    conditions.push(
      or(
        ilike(assets.name, `%${search}%`),
        ilike(assets.assetCode, `%${search}%`),
        ilike(assets.category, `%${search}%`),
        ilike(assets.location, `%${search}%`),
      )!,
    );
  }

  const where = and(...conditions);

  const [rows, totalResult] = await Promise.all([
    db
      .select()
      .from(assets)
      .where(where)
      .orderBy(desc(assets.createdAt))
      .limit(limit)
      .offset(offset),

    db
      .select({
        count: count(),
      })
      .from(assets)
      .where(where),
  ]);

  return {
    data: rows,
    total: totalResult[0]?.count ?? 0,
    page,
    limit,
  };
}

export async function findById(
  id: string,
  organizationId: string,
) {
  const [asset] = await db
    .select()
    .from(assets)
    .where(
      and(
        eq(assets.id, id),
        eq(assets.organizationId, organizationId),
      ),
    )
    .limit(1);

  return asset ?? null;
}

export async function create(
  data: typeof assets.$inferInsert,
) {
  const [asset] = await db
    .insert(assets)
    .values(data)
    .returning();

  return asset;
}

export async function update(
  id: string,
  organizationId: string,
  data: Partial<typeof assets.$inferInsert>,
) {
  const [asset] = await db
    .update(assets)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(assets.id, id),
        eq(assets.organizationId, organizationId),
      ),
    )
    .returning();

  return asset ?? null;
}

export async function remove(
  id: string,
  organizationId: string,
) {
  const [asset] = await db
    .delete(assets)
    .where(
      and(
        eq(assets.id, id),
        eq(assets.organizationId, organizationId),
      ),
    )
    .returning();

  return asset ?? null;
}