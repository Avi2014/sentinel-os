import {
  and,
  count,
  desc,
  eq,
} from "drizzle-orm";

import { db } from "../../database/index.js";
import { incidents } from "../../database/schema/index.js";

import type {
  CreateIncidentInput,
  Incident,
  UpdateIncidentInput,
} from "./types.js";

export async function findIncidents(
  organizationId: string,
  page: number,
  limit: number,
) {
  const offset = (page - 1) * limit;

  const data = await db.query.incidents.findMany({
    where: eq(incidents.organizationId, organizationId),
    orderBy: [desc(incidents.createdAt)],
    limit,
    offset,
  });

  const [{ total }] = await db
    .select({
      total: count(),
    })
    .from(incidents)
    .where(eq(incidents.organizationId, organizationId));

  return {
    data: data as Incident[],
    total,
    page,
    limit,
  };
}

export async function findIncidentById(
  id: string,
  organizationId: string,
) {
  return db.query.incidents.findFirst({
    where: and(
      eq(incidents.id, id),
      eq(incidents.organizationId, organizationId),
    ),
  });
}

export async function insertIncident(
  input: CreateIncidentInput,
) {
  const [incident] = await db
    .insert(incidents)
    .values(input)
    .returning();

  return incident;
}

export async function updateIncidentById(
  id: string,
  organizationId: string,
  input: UpdateIncidentInput,
) {
  const [incident] = await db
    .update(incidents)
    .set({
      ...input,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(incidents.id, id),
        eq(incidents.organizationId, organizationId),
      ),
    )
    .returning();

  return incident ?? null;
}

export async function deleteIncidentById(
  id: string,
  organizationId: string,
) {
  const [incident] = await db
    .delete(incidents)
    .where(
      and(
        eq(incidents.id, id),
        eq(incidents.organizationId, organizationId),
      ),
    )
    .returning();

  return incident ?? null;
}