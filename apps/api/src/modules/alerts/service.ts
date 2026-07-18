import {
  deleteAlertById,
  findAlertById,
  findAlerts,
  insertAlert,
  updateAlertById,
} from "./repository.js";

import type {
  CreateAlertInput,
  UpdateAlertInput,
} from "./types.js";

export async function listAlerts(
  organizationId: string,
  page = 1,
  limit = 20,
) {
  return findAlerts(
    organizationId,
    page,
    limit,
  );
}

export async function getAlert(
  id: string,
  organizationId: string,
) {
  return findAlertById(
    id,
    organizationId,
  );
}

export async function createAlert(
  input: CreateAlertInput,
) {
  return insertAlert(input);
}

export async function updateAlert(
  id: string,
  organizationId: string,
  input: UpdateAlertInput,
) {
  return updateAlertById(
    id,
    organizationId,
    input,
  );
}

export async function acknowledgeAlert(
  id: string,
  organizationId: string,
  userId: string,
) {
  return updateAlertById(
    id,
    organizationId,
    {
      status: "ACKNOWLEDGED",
      acknowledgedBy: userId,
      acknowledgedAt: new Date(),
    },
  );
}

export async function resolveAlert(
  id: string,
  organizationId: string,
) {
  return updateAlertById(
    id,
    organizationId,
    {
      status: "RESOLVED",
    },
  );
}

export async function removeAlert(
  id: string,
  organizationId: string,
) {
  return deleteAlertById(
    id,
    organizationId,
  );
}