import {
  and,
  count,
  desc,
  eq,
} from "drizzle-orm";

import { db } from "../../database/index.js";
import { alerts } from "../../database/schema/index.js";

import type {
  Alert,
  CreateAlertInput,
  UpdateAlertInput,
} from "./types.js";

export async function findAlerts(
  organizationId: string,
  page: number,
  limit: number,
) {
  const offset = (page - 1) * limit;

  const data = await db.query.alerts.findMany({
    where: eq(alerts.organizationId, organizationId),
    orderBy: [desc(alerts.createdAt)],
    limit,
    offset,
  });

  const [{ total }] = await db
    .select({
      total: count(),
    })
    .from(alerts)
    .where(eq(alerts.organizationId, organizationId));

  return {
    data: data as Alert[],
    total,
    page,
    limit,
  };
}

export async function findAlertById(
  id: string,
  organizationId: string,
) {
  return db.query.alerts.findFirst({
    where: and(
      eq(alerts.id, id),
      eq(alerts.organizationId, organizationId),
    ),
  });
}

export async function insertAlert(
  input: CreateAlertInput,
) {
  const [alert] = await db
    .insert(alerts)
    .values(input)
    .returning();

  return alert;
}

export async function updateAlertById(
  id: string,
  organizationId: string,
  input: UpdateAlertInput,
) {
  const [alert] = await db
    .update(alerts)
    .set(input)
    .where(
      and(
        eq(alerts.id, id),
        eq(alerts.organizationId, organizationId),
      ),
    )
    .returning();

  return alert ?? null;
}

export async function deleteAlertById(
  id: string,
  organizationId: string,
) {
  const [alert] = await db
    .delete(alerts)
    .where(
      and(
        eq(alerts.id, id),
        eq(alerts.organizationId, organizationId),
      ),
    )
    .returning();

  return alert ?? null;
}