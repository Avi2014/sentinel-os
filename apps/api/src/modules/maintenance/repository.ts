import {
  and,
  count,
  desc,
  eq,
} from "drizzle-orm";

import { db } from "../../database/index.js";
import { maintenanceWorkOrders } from "../../database/schema/index.js";

import type {
  CreateMaintenanceInput,
  MaintenanceWorkOrder,
  UpdateMaintenanceInput,
} from "./types.js";

export async function findMaintenanceWorkOrders(
  organizationId: string,
  page: number,
  limit: number,
) {
  const offset = (page - 1) * limit;

  const data =
    await db.query.maintenanceWorkOrders.findMany({
      where: eq(
        maintenanceWorkOrders.organizationId,
        organizationId,
      ),
      orderBy: [
        desc(maintenanceWorkOrders.createdAt),
      ],
      limit,
      offset,
    });

  const [{ total }] = await db
    .select({
      total: count(),
    })
    .from(maintenanceWorkOrders)
    .where(
      eq(
        maintenanceWorkOrders.organizationId,
        organizationId,
      ),
    );

  return {
    data: data as MaintenanceWorkOrder[],
    total,
    page,
    limit,
  };
}

export async function findMaintenanceWorkOrderById(
  id: string,
  organizationId: string,
) {
  return db.query.maintenanceWorkOrders.findFirst({
    where: and(
      eq(maintenanceWorkOrders.id, id),
      eq(
        maintenanceWorkOrders.organizationId,
        organizationId,
      ),
    ),
  });
}

export async function insertMaintenanceWorkOrder(
  input: CreateMaintenanceInput,
) {
  const [maintenance] = await db
    .insert(maintenanceWorkOrders)
    .values(input)
    .returning();

  return maintenance;
}

export async function updateMaintenanceWorkOrderById(
  id: string,
  organizationId: string,
  input: UpdateMaintenanceInput,
) {
  const [maintenance] = await db
    .update(maintenanceWorkOrders)
    .set({
      ...input,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(maintenanceWorkOrders.id, id),
        eq(
          maintenanceWorkOrders.organizationId,
          organizationId,
        ),
      ),
    )
    .returning();

  return maintenance ?? null;
}

export async function deleteMaintenanceWorkOrderById(
  id: string,
  organizationId: string,
) {
  const [maintenance] = await db
    .delete(maintenanceWorkOrders)
    .where(
      and(
        eq(maintenanceWorkOrders.id, id),
        eq(
          maintenanceWorkOrders.organizationId,
          organizationId,
        ),
      ),
    )
    .returning();

  return maintenance ?? null;
}