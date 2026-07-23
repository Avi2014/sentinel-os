import type {
  DashboardOverview,
  DashboardTrendPoint,
} from "./types.js";

const alertTrends: DashboardTrendPoint[] = [
  { label: "Critical", value: 2 },
  { label: "Warning", value: 6 },
];

const incidentTrends: DashboardTrendPoint[] = [
  { label: "Open", value: 3 },
  { label: "Resolved", value: 12 },
];

const maintenanceTrends: DashboardTrendPoint[] = [
  { label: "Scheduled", value: 17 },
  { label: "Completed", value: 45 },
];

export async function getDashboardOverview(): Promise<DashboardOverview> {
  return {
    summary: {
      totalAssets: 142,
      totalSensors: 684,
      activeAlerts: 8,
      openIncidents: 3,
      openMaintenance: 17,
    },
    alerts: alertTrends,
    incidents: incidentTrends,
    maintenance: maintenanceTrends,
  };
}