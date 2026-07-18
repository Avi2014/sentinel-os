export interface Sensor {
  id: string;
  organizationId: string;
  assetId: string;
  sensorCode: string;
  name: string;
  type: string;
  manufacturer: string | null;
  model: string | null;
  unit: string | null;
  status: string;
  lastValue: string | null;
  lastHeartbeat: Date | null;
  installationDate: Date | null;
  location: string | null;
  metadata: unknown;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateSensorInput {
  organizationId: string;
  assetId: string;
  sensorCode: string;
  name: string;
  type: string;
  manufacturer?: string;
  model?: string;
  unit?: string;
  status?: string;
  installationDate?: Date;
  location?: string;
  metadata?: unknown;
}

export interface UpdateSensorInput {
  assetId?: string;
  sensorCode?: string;
  name?: string;
  type?: string;
  manufacturer?: string;
  model?: string;
  unit?: string;
  status?: string;
  lastValue?: string;
  lastHeartbeat?: Date;
  installationDate?: Date;
  location?: string;
  metadata?: unknown;
}

export interface SensorListOptions {
  organizationId: string;
  page: number;
  limit: number;
  search?: string;
}

export interface SensorListResult {
  data: Sensor[];
  total: number;
  page: number;
  limit: number;
}