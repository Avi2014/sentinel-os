export interface MaintenanceWorkOrder {
  id: string;
  organizationId: string;
  assetId: string;
  incidentId: string | null;
  title: string;
  description: string | null;
  type: string;
  priority: string;
  status: string;
  assignedTo: string | null;
  createdBy: string;
  scheduledAt: Date | null;
  completedAt: Date | null;
  notes: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateMaintenanceInput {
  organizationId: string;
  assetId: string;
  incidentId?: string;
  title: string;
  description?: string;
  type?: string;
  priority?: string;
  createdBy: string;
  scheduledAt?: Date;
}

export interface UpdateMaintenanceInput {
  title?: string;
  description?: string;
  type?: string;
  priority?: string;
  status?: string;
  assignedTo?: string;
  scheduledAt?: Date;
  completedAt?: Date;
  notes?: string;
}

export interface MaintenanceListOptions {
  organizationId: string;
  page: number;
  limit: number;
}

export interface MaintenanceListResult {
  data: MaintenanceWorkOrder[];
  total: number;
  page: number;
  limit: number;
}