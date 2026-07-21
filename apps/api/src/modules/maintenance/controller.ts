import type { Request, Response } from "express";

import { toMaintenanceDto } from "./dto.js";

import {
  assignMaintenanceWorkOrder,
  completeMaintenanceWorkOrder,
  createMaintenanceWorkOrder,
  deleteMaintenanceWorkOrder,
  getMaintenanceWorkOrder,
  listMaintenanceWorkOrders,
  updateMaintenanceWorkOrder,
} from "./service.js";

import {
  createMaintenanceSchema,
  updateMaintenanceSchema,
} from "./validation.js";

export async function listMaintenanceWorkOrdersHandler(
  req: Request,
  res: Response,
) {
  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 20);

  const result =
    await listMaintenanceWorkOrders(
      req.user.organizationId,
      page,
      limit,
    );

  return res.json({
    ...result,
    data: result.data.map(
      toMaintenanceDto,
    ),
  });
}

export async function getMaintenanceWorkOrderHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const maintenance =
    await getMaintenanceWorkOrder(
      id,
      req.user.organizationId,
    );

  if (!maintenance) {
    return res.status(404).json({
      message:
        "Maintenance work order not found",
    });
  }

  return res.json(
    toMaintenanceDto(maintenance),
  );
}

export async function createMaintenanceWorkOrderHandler(
  req: Request,
  res: Response,
) {
  const body =
    createMaintenanceSchema.parse(
      req.body,
    );

  const maintenance =
    await createMaintenanceWorkOrder({
      ...body,
      organizationId:
        req.user.organizationId,
      createdBy: req.user.userId,
    });

  return res.status(201).json(
    toMaintenanceDto(maintenance),
  );
}

export async function updateMaintenanceWorkOrderHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const body =
    updateMaintenanceSchema.parse(
      req.body,
    );

  const maintenance =
    await updateMaintenanceWorkOrder(
      id,
      req.user.organizationId,
      body,
    );

  if (!maintenance) {
    return res.status(404).json({
      message:
        "Maintenance work order not found",
    });
  }

  return res.json(
    toMaintenanceDto(maintenance),
  );
}

export async function assignMaintenanceWorkOrderHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const maintenance =
    await assignMaintenanceWorkOrder(
      id,
      req.user.organizationId,
      req.user.userId,
    );

  return res.json(
    toMaintenanceDto(maintenance),
  );
}

export async function completeMaintenanceWorkOrderHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const maintenance =
    await completeMaintenanceWorkOrder(
      id,
      req.user.organizationId,
    );

  return res.json(
    toMaintenanceDto(maintenance),
  );
}

export async function deleteMaintenanceWorkOrderHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  await deleteMaintenanceWorkOrder(
    id,
    req.user.organizationId,
  );

  return res.status(204).send();
}