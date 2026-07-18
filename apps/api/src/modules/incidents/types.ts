export interface Incident {
  id: string;
  organizationId: string;
  alertId: string;
  title: string;
  description: string | null;
  severity: string;
  status: string;
  assignedTo: string | null;
  resolvedBy: string | null;
  resolvedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateIncidentInput {
  organizationId: string;
  alertId: string;
  title: string;
  description?: string;
  severity?: string;
}

export interface UpdateIncidentInput {
  title?: string;
  description?: string;
  severity?: string;
  status?: string;
  assignedTo?: string;
  resolvedBy?: string;
  resolvedAt?: Date;
}

export interface IncidentListOptions {
  organizationId: string;
  page: number;
  limit: number;
}

export interface IncidentListResult {
  data: Incident[];
  total: number;
  page: number;
  limit: number;
}