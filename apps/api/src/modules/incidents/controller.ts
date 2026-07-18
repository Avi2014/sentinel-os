import type { Request, Response } from "express";

import { toIncidentDto } from "./dto.js";
import {
  closeIncident,
  createIncident,
  deleteIncident,
  getIncident,
  listIncidents,
  resolveIncident,
  updateIncident,
} from "./service.js";

import {
  createIncidentSchema,
  updateIncidentSchema,
} from "./validation.js";

export async function listIncidentsHandler(
  req: Request,
  res: Response,
) {
  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 20);

  const result = await listIncidents(
    req.user.organizationId,
    page,
    limit,
  );

  return res.json({
    ...result,
    data: result.data.map(toIncidentDto),
  });
}

export async function getIncidentHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const incident = await getIncident(
    id,
    req.user.organizationId,
  );

  if (!incident) {
    return res.status(404).json({
      message: "Incident not found",
    });
  }

  return res.json(
    toIncidentDto(incident),
  );
}

export async function createIncidentHandler(
  req: Request,
  res: Response,
) {
  const body = createIncidentSchema.parse(req.body);

  const incident = await createIncident({
    ...body,
    organizationId: req.user.organizationId,
  });

  return res.status(201).json(
    toIncidentDto(incident),
  );
}

export async function updateIncidentHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const body = updateIncidentSchema.parse(req.body);

  const incident = await updateIncident(
    id,
    req.user.organizationId,
    body,
  );

  if (!incident) {
    return res.status(404).json({
      message: "Incident not found",
    });
  }

  return res.json(
    toIncidentDto(incident),
  );
}

export async function resolveIncidentHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const incident = await resolveIncident(
    id,
    req.user.organizationId,
    req.user.userId,
  );

  if (!incident) {
    return res.status(404).json({
      message: "Incident not found",
    });
  }

  return res.json(
    toIncidentDto(incident),
  );
}

export async function closeIncidentHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const incident = await closeIncident(
    id,
    req.user.organizationId,
  );

  if (!incident) {
    return res.status(404).json({
      message: "Incident not found",
    });
  }

  return res.json(
    toIncidentDto(incident),
  );
}

export async function deleteIncidentHandler(
  req: Request,
  res: Response,
) {
  const id = String(req.params.id);

  const incident = await deleteIncident(
    id,
    req.user.organizationId,
  );

  if (!incident) {
    return res.status(404).json({
      message: "Incident not found",
    });
  }

  return res.status(204).send();
}