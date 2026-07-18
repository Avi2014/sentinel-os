import type { Sensor } from "./types.js";

export function toSensorDto(sensor: Sensor) {
  return {
    id: sensor.id,
    organizationId: sensor.organizationId,
    assetId: sensor.assetId,
    sensorCode: sensor.sensorCode,
    name: sensor.name,
    type: sensor.type,
    manufacturer: sensor.manufacturer,
    model: sensor.model,
    unit: sensor.unit,
    status: sensor.status,
    lastValue: sensor.lastValue,
    lastHeartbeat: sensor.lastHeartbeat,
    installationDate: sensor.installationDate,
    location: sensor.location,
    metadata: sensor.metadata,
    createdAt: sensor.createdAt,
    updatedAt: sensor.updatedAt,
  };
}