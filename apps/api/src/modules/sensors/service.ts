import {
  deleteSensorById,
  findSensorById,
  findSensors,
  insertSensor,
  updateSensorById,
} from "./repository.js";

import type {
  CreateSensorInput,
  SensorListOptions,
  UpdateSensorInput,
} from "./types.js";

export async function listSensors(
  options: SensorListOptions,
) {
  const result = await findSensors(options);

  return {
    data: result.data,
    total: result.total,
    page: options.page,
    limit: options.limit,
  };
}

export async function getSensor(
  id: string,
  organizationId: string,
) {
  return findSensorById(id, organizationId);
}

export async function createSensor(
  input: CreateSensorInput,
) {
  return insertSensor(input);
}

export async function updateSensor(
  id: string,
  organizationId: string,
  input: UpdateSensorInput,
) {
  return updateSensorById(
    id,
    organizationId,
    input,
  );
}

export async function deleteSensor(
  id: string,
  organizationId: string,
) {
  return deleteSensorById(id, organizationId);
}