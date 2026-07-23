import { Factory } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { DashboardSummary } from "../../types";

import { PlantHealthBar } from "./PlantHealthBar";
import { PlantOverviewSkeleton } from "./PlantOverviewSkeleton";

interface PlantOverviewProps {
  summary?: DashboardSummary;
  isLoading?: boolean;
  className?: string;
}

export function PlantOverview({
  summary,
  isLoading = false,
  className,
}: PlantOverviewProps) {
  if (isLoading) {
    return <PlantOverviewSkeleton />;
  }

  if (!summary) {
    return null;
  }

  const onlinePercentage =
    summary.totalPlants === 0
      ? 0
      : (summary.onlinePlants / summary.totalPlants) * 100;

  const warningPlants = Math.max(
    0,
    summary.totalPlants -
      summary.onlinePlants -
      summary.offlinePlants,
  );

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">
          Plant Overview
        </CardTitle>

        <Factory className="h-5 w-5 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          <StatRow
            label="Total Plants"
            value={summary.totalPlants}
          />

          <StatRow
            label="Online"
            value={summary.onlinePlants}
          />

          <StatRow
            label="Offline"
            value={summary.offlinePlants}
          />

          <StatRow
            label="Warning"
            value={warningPlants}
          />
        </div>

        <PlantHealthBar value={onlinePercentage} />
      </CardContent>
    </Card>
  );
}

interface StatRowProps {
  label: string;
  value: number;
}

function StatRow({
  label,
  value,
}: StatRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}

PlantOverview.displayName = "PlantOverview";