import type { Alert } from "./types.js";

export function toAlertDto(alert: Alert) {
  return {
    id: alert.id,
    organizationId: alert.organizationId,
    sensorId: alert.sensorId,
    telemetryId: alert.telemetryId,
    rule: alert.rule,
    severity: alert.severity,
    message: alert.message,
    status: alert.status,
    acknowledgedBy: alert.acknowledgedBy,
    acknowledgedAt: alert.acknowledgedAt,
    createdAt: alert.createdAt,
  };
}