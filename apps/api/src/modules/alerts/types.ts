export interface Alert {
  id: string;
  organizationId: string;
  sensorId: string;
 telemetryId: string;
  rule: string;
  severity: string;
  message: string;
  status: string;
  acknowledgedBy: string | null;
  acknowledgedAt: Date | null;
  createdAt: Date;
}

export interface CreateAlertInput {
  organizationId: string;
  sensorId: string;
  telemetryId: string;
  rule: string;
  severity?: string;
  message: string;
}

export interface UpdateAlertInput {
  severity?: string;
  message?: string;
  status?: string;
  acknowledgedBy?: string;
  acknowledgedAt?: Date;
}

export interface AlertListOptions {
  organizationId: string;
  page: number;
  limit: number;
  status?: string;
}

export interface AlertListResult {
  data: Alert[];
  total: number;
  page: number;
  limit: number;
}