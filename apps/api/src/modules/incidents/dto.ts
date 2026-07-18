import type { Incident } from "./types.js";

export function toIncidentDto(
  incident: Incident,
) {
  return {
    id: incident.id,
    organizationId: incident.organizationId,
    alertId: incident.alertId,
    title: incident.title,
    description: incident.description,
    severity: incident.severity,
    status: incident.status,
    assignedTo: incident.assignedTo,
    resolvedBy: incident.resolvedBy,
    resolvedAt: incident.resolvedAt,
    createdAt: incident.createdAt,
    updatedAt: incident.updatedAt,
  };
}