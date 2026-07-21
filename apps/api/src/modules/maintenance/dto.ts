import type { MaintenanceWorkOrder } from "./types.js";

export function toMaintenanceDto(
  maintenance: MaintenanceWorkOrder,
) {
  return {
    id: maintenance.id,
    organizationId: maintenance.organizationId,
    assetId: maintenance.assetId,
    incidentId: maintenance.incidentId,
    title: maintenance.title,
    description: maintenance.description,
    type: maintenance.type,
    priority: maintenance.priority,
    status: maintenance.status,
    assignedTo: maintenance.assignedTo,
    createdBy: maintenance.createdBy,
    scheduledAt: maintenance.scheduledAt,
    completedAt: maintenance.completedAt,
    notes: maintenance.notes,
    createdAt: maintenance.createdAt,
    updatedAt: maintenance.updatedAt,
  };
}