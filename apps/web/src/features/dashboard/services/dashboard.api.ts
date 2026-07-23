import type { DashboardResponse } from "../types";

const API_BASE = "/api/v1/dashboard";

export async function getDashboard(): Promise<DashboardResponse> {
  const response = await fetch(API_BASE);

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard data.");
  }

  return response.json() as Promise<DashboardResponse>;
}
