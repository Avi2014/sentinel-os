import {
  and,
  count,
  eq,
  ilike,
  or,
} from "drizzle-orm";

import { db } from "../../database/index.js";
import { sensors } from "../../database/schema/index.js";

import type {
  CreateSensorInput,
  SensorListOptions,
  UpdateSensorInput,
} from "./types.js";

export async function findSensors({
  organizationId,
  page,
  limit,
  search,
}: SensorListOptions) {
  const offset = (page - 1) * limit;

  const where = search
    ? and(
        eq(sensors.organizationId, organizationId),
        or(
          ilike(sensors.name, `%${search}%`),
          ilike(sensors.sensorCode, `%${search}%`),
          ilike(sensors.type, `%${search}%`),
        ),
      )
    : eq(sensors.organizationId, organizationId);

  const data = await db
    .select()
    .from(sensors)
    .where(where)
    .limit(limit)
    .offset(offset);

  const [{ total }] = await db
    .select({
      total: count(),
    })
    .from(sensors)
    .where(where);

  return {
    data,
    total,
  };
}

export async function findSensorById(
  id: string,
  organizationId: string,
) {
  const [sensor] = await db
    .select()
    .from(sensors)
    .where(
      and(
        eq(sensors.id, id),
        eq(sensors.organizationId, organizationId),
      ),
    );

  return sensor ?? null;
}

export async function insertSensor(
  input: CreateSensorInput,
) {
  const [sensor] = await db
    .insert(sensors)
    .values(input)
    .returning();

  return sensor;
}

export async function updateSensorById(
  id: string,
  organizationId: string,
  input: UpdateSensorInput,
) {
  const [sensor] = await db
    .update(sensors)
    .set({
      ...input,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(sensors.id, id),
        eq(sensors.organizationId, organizationId),
      ),
    )
    .returning();

  return sensor ?? null;
}
export async function updateSensorHeartbeat(
  sensorId: string,
  organizationId: string,
  value: string,
) {
  const [sensor] = await db
    .update(sensors)
    .set({
      lastValue: value,
      lastHeartbeat: new Date(),
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(sensors.id, sensorId),
        eq(sensors.organizationId, organizationId),
      ),
    )
    .returning();

  return sensor ?? null;
}
export async function deleteSensorById(
  id: string,
  organizationId: string,
) {
  const [sensor] = await db
    .delete(sensors)
    .where(
      and(
        eq(sensors.id, id),
        eq(sensors.organizationId, organizationId),
      ),
    )
    .returning();

  return sensor ?? null;
}