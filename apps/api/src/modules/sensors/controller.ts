import type { Request, Response } from "express";

import {
  createSensor,
  deleteSensor,
  getSensor,
  listSensors,
  updateSensor,
} from "./service.js";

import { toSensorDto } from "./dto.js";
import {
  createSensorSchema,
  updateSensorSchema,
} from "./validation.js";

export async function listSensorsHandler(
  req: Request,
  res: Response,
) {
  const organizationId = req.user!.organizationId;

  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 10);
  const search = req.query.search as string | undefined;

  const result = await listSensors({
    page,
    limit,
    search,
    organizationId,
  });

  return res.json({
    ...result,
    data: result.data.map(toSensorDto),
  });
}

export async function getSensorHandler(
  req: Request,
  res: Response,
) {
  const id = req.params.id as string;

  const sensor = await getSensor(
    id,
    req.user!.organizationId,
  );

  if (!sensor) {
    return res.status(404).json({
      message: "Sensor not found",
    });
  }

  return res.json(toSensorDto(sensor));
}

export async function createSensorHandler(
  req: Request,
  res: Response,
) {
  const body = createSensorSchema.parse(req.body);

  const sensor = await createSensor({
    ...body,
    organizationId: req.user!.organizationId,
  });

  return res.status(201).json(
    toSensorDto(sensor),
  );
}

export async function updateSensorHandler(
  req: Request,
  res: Response,
) {
  const id = req.params.id as string;

  const body = updateSensorSchema.parse(req.body);

  const sensor = await updateSensor(
    id,
    req.user!.organizationId,
    body,
  );

  if (!sensor) {
    return res.status(404).json({
      message: "Sensor not found",
    });
  }

  return res.json(toSensorDto(sensor));
}

export async function deleteSensorHandler(
  req: Request,
  res: Response,
) {
  const id = req.params.id as string;

  const sensor = await deleteSensor(
    id,
    req.user!.organizationId,
  );

  if (!sensor) {
    return res.status(404).json({
      message: "Sensor not found",
    });
  }

  return res.status(204).send();
}