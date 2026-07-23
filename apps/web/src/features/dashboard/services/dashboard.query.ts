import { useQuery } from "@tanstack/react-query";

import { getDashboard } from "./dashboard.api";

export const dashboardQueryKey = ["dashboard"] as const;

export function useDashboardQuery() {
  return useQuery({
    queryKey: dashboardQueryKey,
    queryFn: getDashboard,
    staleTime: 60_000,
    refetchOnWindowFocus: false,
  });
}