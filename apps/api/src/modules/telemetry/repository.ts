import { and, count, desc, eq } from "drizzle-orm";

import { db } from "../../database/index.js";
import { telemetry } from "../../database/schema/index.js";

import type {
  CreateTelemetryInput,
  Telemetry,
  UpdateTelemetryInput,
} from "./types.js";

export async function findTelemetry(
  organizationId: string,
  page: number,
  limit: number,
) {
  const offset = (page - 1) * limit;

  const data = await db.query.telemetry.findMany({
    where: eq(telemetry.organizationId, organizationId),
    orderBy: [desc(telemetry.recordedAt)],
    limit,
    offset,
  });

  const [{ total }] = await db
    .select({
      total: count(),
    })
    .from(telemetry)
    .where(eq(telemetry.organizationId, organizationId));

  return {
    data: data as Telemetry[],
    total,
    page,
    limit,
  };
}

export async function findTelemetryById(id: string) {
  return db.query.telemetry.findFirst({
    where: eq(telemetry.id, id),
  });
}

export async function findLatestTelemetry(
  organizationId: string,
  sensorId: string,
) {
  return db.query.telemetry.findFirst({
    where: and(
      eq(telemetry.organizationId, organizationId),
      eq(telemetry.sensorId, sensorId),
    ),
    orderBy: [desc(telemetry.recordedAt)],
  });
}

export async function insertTelemetry(
  input: CreateTelemetryInput,
) {
  const [created] = await db
    .insert(telemetry)
    .values(input)
    .returning();

  return created;
}

export async function updateTelemetry(
  id: string,
  input: UpdateTelemetryInput,
) {
  const [updated] = await db
    .update(telemetry)
    .set(input)
    .where(eq(telemetry.id, id))
    .returning();

  return updated;
}

export async function deleteTelemetry(
  id: string,
) {
  const [deleted] = await db
    .delete(telemetry)
    .where(eq(telemetry.id, id))
    .returning();

  return deleted;
}