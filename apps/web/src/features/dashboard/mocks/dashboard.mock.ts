import type { DashboardResponse } from "../types";

export const dashboardMock: DashboardResponse = {
  summary: {
    totalPlants: 142,
    onlinePlants: 136,
    offlinePlants: 6,
    activeAlerts: 8,
    openIncidents: 3,
    aiRecommendations: 12,
  },

  plants: [],

  alerts: [],

  incidents: [],

  timeline: [],

  recommendations: [],
};
