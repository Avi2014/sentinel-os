import { ApiError } from "../../core/errors/api-error.js";

import {
  deleteIncidentById,
  findIncidentById,
  findIncidents,
  insertIncident,
  updateIncidentById,
} from "./repository.js";

import type {
  CreateIncidentInput,
  UpdateIncidentInput,
} from "./types.js";

export async function listIncidents(
  organizationId: string,
  page: number,
  limit: number,
) {
  return findIncidents(
    organizationId,
    page,
    limit,
  );
}

export async function getIncident(
  id: string,
  organizationId: string,
) {
  const incident = await findIncidentById(
    id,
    organizationId,
  );

  if (!incident) {
    throw new ApiError(404, "Incident not found.");
  }

  return incident;
}

export async function createIncident(
  input: CreateIncidentInput,
) {
  return insertIncident(input);
}

export async function updateIncident(
  id: string,
  organizationId: string,
  input: UpdateIncidentInput,
) {
  const incident = await updateIncidentById(
    id,
    organizationId,
    input,
  );

  if (!incident) {
    throw new ApiError(404, "Incident not found.");
  }

  return incident;
}

export async function assignIncident(
  id: string,
  organizationId: string,
  assignedTo: string,
) {
  return updateIncident(
    id,
    organizationId,
    {
      assignedTo,
      status: "ASSIGNED",
    },
  );
}

export async function startIncident(
  id: string,
  organizationId: string,
) {
  return updateIncident(
    id,
    organizationId,
    {
      status: "IN_PROGRESS",
    },
  );
}

export async function resolveIncident(
  id: string,
  organizationId: string,
  resolvedBy: string,
) {
  return updateIncident(
    id,
    organizationId,
    {
      status: "RESOLVED",
      resolvedBy,
      resolvedAt: new Date(),
    },
  );
}

export async function closeIncident(
  id: string,
  organizationId: string,
) {
  return updateIncident(
    id,
    organizationId,
    {
      status: "CLOSED",
    },
  );
}

export async function deleteIncident(
  id: string,
  organizationId: string,
) {
  const incident = await deleteIncidentById(
    id,
    organizationId,
  );

  if (!incident) {
    throw new ApiError(404, "Incident not found.");
  }

  return incident;
}