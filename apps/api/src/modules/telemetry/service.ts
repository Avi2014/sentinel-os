import { findSensorById, updateSensorHeartbeat } from "../sensors/repository.js";

import {
  deleteTelemetry,
  findLatestTelemetry,
  findTelemetry,
  findTelemetryById,
  insertTelemetry,
  updateTelemetry,
} from "./repository.js";

import type {
  CreateTelemetryInput,
  UpdateTelemetryInput,
} from "./types.js";

export async function listTelemetry(
  organizationId: string,
  page = 1,
  limit = 20,
) {
  return findTelemetry(organizationId, page, limit);
}

export async function getTelemetry(
  id: string,
) {
  return findTelemetryById(id);
}

export async function getLatestTelemetry(
  organizationId: string,
  sensorId: string,
) {
  return findLatestTelemetry(
    organizationId,
    sensorId,
  );
}

export async function createTelemetry(
  input: CreateTelemetryInput,
) {
  const sensor = await findSensorById(
    input.sensorId,
    input.organizationId,
  );

  if (!sensor) {
    throw new Error("Sensor not found");
  }

  if (sensor.status !== "ACTIVE") {
    throw new Error("Sensor is not active");
  }

  const telemetry = await insertTelemetry(input);

  await updateSensorHeartbeat(
    sensor.id,
    sensor.organizationId,
    input.value,
  );

  return telemetry;
}

export async function editTelemetry(
  id: string,
  input: UpdateTelemetryInput,
) {
  return updateTelemetry(id, input);
}

export async function removeTelemetry(
  id: string,
) {
  return deleteTelemetry(id);
}