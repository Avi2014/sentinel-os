import type { Request, Response } from "express";

import { toAlertDto } from "./dto.js";
import {
  acknowledgeAlert,
  createAlert,
  getAlert,
  listAlerts,
  removeAlert,
  resolveAlert,
  updateAlert,
} from "./service.js";

export async function listAlertsHandler(
  req: Request,
  res: Response,
) {
  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 20);

  const result = await listAlerts(
    req.user.organizationId,
    page,
    limit,
  );

  return res.json({
    ...result,
    data: result.data.map(toAlertDto),
  });
}

export async function getAlertHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const alert = await getAlert(
    id,
    req.user.organizationId,
  );

  if (!alert) {
    return res.status(404).json({
      message: "Alert not found",
    });
  }

  return res.json(toAlertDto(alert));
}

export async function createAlertHandler(
  req: Request,
  res: Response,
) {
  const alert = await createAlert({
    ...req.body,
    organizationId: req.user.organizationId,
  });

  return res.status(201).json(
    toAlertDto(alert),
  );
}

export async function updateAlertHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const alert = await updateAlert(
    id,
    req.user.organizationId,
    req.body,
  );

  if (!alert) {
    return res.status(404).json({
      message: "Alert not found",
    });
  }

  return res.json(
    toAlertDto(alert),
  );
}

export async function acknowledgeAlertHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const alert = await acknowledgeAlert(
  id,
  req.user.organizationId,
  req.user.userId,
);

  if (!alert) {
    return res.status(404).json({
      message: "Alert not found",
    });
  }

  return res.json(
    toAlertDto(alert),
  );
}

export async function resolveAlertHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const alert = await resolveAlert(
    id,
    req.user.organizationId,
  );

  if (!alert) {
    return res.status(404).json({
      message: "Alert not found",
    });
  }

  return res.json(
    toAlertDto(alert),
  );
}

export async function deleteAlertHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const alert = await removeAlert(
    id,
    req.user.organizationId,
  );

  if (!alert) {
    return res.status(404).json({
      message: "Alert not found",
    });
  }

  return res.status(204).send();
}