import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@lib/query";

import { getDashboard } from "../services";
import type { DashboardResponse } from "../types";

export function useDashboard() {
  return useQuery<DashboardResponse>({
    queryKey: queryKeys.dashboard,
    queryFn: getDashboard,

    staleTime: 30_000,

    refetchOnWindowFocus: false,

    retry: 1,
  });
}