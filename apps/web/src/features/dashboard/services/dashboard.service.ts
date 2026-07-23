import { api, endpoints } from "@lib/api";

import type { DashboardResponse } from "../types";

/**
 * -----------------------------------------------------------------------------
 * Dashboard Service
 * -----------------------------------------------------------------------------
 * Responsible for communicating with the Dashboard API.
 *
 * Endpoint:
 * GET /api/v1/dashboard
 *
 * Components MUST NOT call axios directly.
 * -----------------------------------------------------------------------------
 */

export async function getDashboard(): Promise<DashboardResponse> {
  const { data } = await api.get<DashboardResponse>(
    endpoints.dashboard,
  );

  return data;
}