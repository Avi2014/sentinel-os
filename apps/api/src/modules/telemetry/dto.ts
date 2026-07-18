import type { Telemetry } from "./types.js";

export function toTelemetryDto(
  telemetry: Telemetry,
) {
  return {
    id: telemetry.id,
    organizationId: telemetry.organizationId,
    sensorId: telemetry.sensorId,
    value: telemetry.value,
    quality: telemetry.quality,
    recordedAt: telemetry.recordedAt,
    metadata: telemetry.metadata,
    createdAt: telemetry.createdAt,
  };
}