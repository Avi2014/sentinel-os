export interface DashboardSummary {
  totalAssets: number;
  totalSensors: number;
  activeAlerts: number;
  openIncidents: number;
  openMaintenance: number;
}

export interface DashboardTrendPoint {
  label: string;
  value: number;
}

export interface DashboardOverview {
  summary: DashboardSummary;
  alerts: DashboardTrendPoint[];
  incidents: DashboardTrendPoint[];
  maintenance: DashboardTrendPoint[];
}