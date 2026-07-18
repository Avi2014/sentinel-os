import type { Request, Response } from "express";

import { toTelemetryDto } from "./dto.js";
import {
  createTelemetry,
  editTelemetry,
  getLatestTelemetry,
  getTelemetry,
  listTelemetry,
  removeTelemetry,
} from "./service.js";

export async function listTelemetryHandler(
  req: Request,
  res: Response,
) {
  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 20);

  const result = await listTelemetry(
    req.user.organizationId,
    page,
    limit,
  );

  return res.json({
    ...result,
    data: result.data.map(toTelemetryDto),
  });
}

export async function getTelemetryHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const telemetry = await getTelemetry(id);

  if (!telemetry) {
    return res.status(404).json({
      message: "Telemetry not found",
    });
  }

  return res.json(toTelemetryDto(telemetry));
}

export async function latestTelemetryHandler(
  req: Request,
  res: Response,
) {
  const sensorId = String(req.params.sensorId);

  const telemetry = await getLatestTelemetry(
    req.user.organizationId,
    sensorId,
  );

  if (!telemetry) {
    return res.status(404).json({
      message: "Telemetry not found",
    });
  }

  return res.json(toTelemetryDto(telemetry));
}

export async function createTelemetryHandler(
  req: Request,
  res: Response,
) {
  const telemetry = await createTelemetry({
    ...req.body,
    organizationId: req.user.organizationId,
  });

  return res.status(201).json(
    toTelemetryDto(telemetry),
  );
}

export async function updateTelemetryHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const telemetry = await editTelemetry(
    id,
    req.body,
  );

  if (!telemetry) {
    return res.status(404).json({
      message: "Telemetry not found",
    });
  }

  return res.json(
    toTelemetryDto(telemetry),
  );
}

export async function deleteTelemetryHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const telemetry = await removeTelemetry(id);

  if (!telemetry) {
    return res.status(404).json({
      message: "Telemetry not found",
    });
  }

  return res.status(204).send();
}