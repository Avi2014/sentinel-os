export interface Telemetry {
  id: string;
  organizationId: string;
  sensorId: string;
  value: string;
  quality: string;
  recordedAt: Date;
  metadata: unknown;
  createdAt: Date;
}

export interface CreateTelemetryInput {
  organizationId: string;
  sensorId: string;
  value: string;
  quality?: string;
  recordedAt?: Date;
  metadata?: unknown;
}

export interface UpdateTelemetryInput {
  value?: string;
  quality?: string;
  recordedAt?: Date;
  metadata?: unknown;
}

export interface TelemetryListOptions {
  organizationId: string;
  sensorId?: string;
  page: number;
  limit: number;
}

export interface TelemetryListResult {
  data: Telemetry[];
  total: number;
  page: number;
  limit: number;
}