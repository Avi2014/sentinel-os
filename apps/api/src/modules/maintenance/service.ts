import { ApiError } from "../../core/errors/api-error.js";

import {
  deleteMaintenanceWorkOrderById,
  findMaintenanceWorkOrderById,
  findMaintenanceWorkOrders,
  insertMaintenanceWorkOrder,
  updateMaintenanceWorkOrderById,
} from "./repository.js";

import type {
  CreateMaintenanceInput,
  UpdateMaintenanceInput,
} from "./types.js";

export async function listMaintenanceWorkOrders(
  organizationId: string,
  page: number,
  limit: number,
) {
  return findMaintenanceWorkOrders(
    organizationId,
    page,
    limit,
  );
}

export async function getMaintenanceWorkOrder(
  id: string,
  organizationId: string,
) {
  const maintenance =
    await findMaintenanceWorkOrderById(
      id,
      organizationId,
    );

  if (!maintenance) {
    throw new ApiError(
      404,
      "Maintenance work order not found.",
    );
  }

  return maintenance;
}

export async function createMaintenanceWorkOrder(
  input: CreateMaintenanceInput,
) {
  return insertMaintenanceWorkOrder(input);
}

export async function updateMaintenanceWorkOrder(
  id: string,
  organizationId: string,
  input: UpdateMaintenanceInput,
) {
  const maintenance =
    await updateMaintenanceWorkOrderById(
      id,
      organizationId,
      input,
    );

  if (!maintenance) {
    throw new ApiError(
      404,
      "Maintenance work order not found.",
    );
  }

  return maintenance;
}

export async function assignMaintenanceWorkOrder(
  id: string,
  organizationId: string,
  assignedTo: string,
) {
  return updateMaintenanceWorkOrder(
    id,
    organizationId,
    {
      assignedTo,
      status: "ASSIGNED",
    },
  );
}

export async function startMaintenanceWorkOrder(
  id: string,
  organizationId: string,
) {
  return updateMaintenanceWorkOrder(
    id,
    organizationId,
    {
      status: "IN_PROGRESS",
    },
  );
}

export async function completeMaintenanceWorkOrder(
  id: string,
  organizationId: string,
) {
  return updateMaintenanceWorkOrder(
    id,
    organizationId,
    {
      status: "COMPLETED",
      completedAt: new Date(),
    },
  );
}

export async function cancelMaintenanceWorkOrder(
  id: string,
  organizationId: string,
) {
  return updateMaintenanceWorkOrder(
    id,
    organizationId,
    {
      status: "CANCELLED",
    },
  );
}

export async function deleteMaintenanceWorkOrder(
  id: string,
  organizationId: string,
) {
  const maintenance =
    await deleteMaintenanceWorkOrderById(
      id,
      organizationId,
    );

  if (!maintenance) {
    throw new ApiError(
      404,
      "Maintenance work order not found.",
    );
  }

  return maintenance;
}