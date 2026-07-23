import { Page } from "@/components/common";
import { DashboardGrid } from "./components/DashboardGrid";
import { DashboardHeader } from "./components/DashboardHeader";
import { KPICards } from "./components/KPICards";
import { useDashboard } from "./hooks";
import { PlantOverview } from "@/features/dashboard/components/PlantOverview";
import { AlertsWidget } from "@/features/dashboard/components/AlertsWidget";
import { IncidentsWidget } from "@/features/dashboard/components/IncidentsWidget/IncidentsWidget";
import { AIRecommendations } from "@/features/dashboard/components/AIRecommendations/AIRecommendations";
import { ActivityTimeline } from "@/features/dashboard/components/ActivityTimeline";

export function DashboardPage() {
  const { data, isLoading, isError, refetch } = useDashboard();

  if (isError) {
    return (
      <Page>
        <DashboardHeader
          title="Dashboard"
          description="Monitor assets, sensors, alerts, and maintenance activities."
          isRefreshing={isLoading}
          onRefresh={refetch}
        />

        <div className="border-destructive/20 bg-destructive/5 rounded-lg border p-6 text-center">
          <h2 className="text-destructive text-lg font-semibold">
            Failed to load dashboard
          </h2>

          <p className="text-muted-foreground mt-2 text-sm">
            Please try refreshing the dashboard.
          </p>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <DashboardHeader
        title="Dashboard"
        description="Monitor assets, sensors, alerts, and maintenance activities."
        lastUpdated={new Date()}
        isRefreshing={isLoading}
        onRefresh={refetch}
      />

      <DashboardGrid>
        <KPICards summary={data?.summary} isLoading={isLoading} />

        <PlantOverview summary={data?.summary} isLoading={isLoading} />

        <AlertsWidget alerts={data?.alerts} isLoading={isLoading} />

        <IncidentsWidget incidents={data?.incidents} isLoading={isLoading} />

        <AIRecommendations
          recommendations={data?.recommendations}
          isLoading={isLoading}
        />
        <ActivityTimeline timeline={data?.timeline} isLoading={isLoading} />
      </DashboardGrid>
    </Page>
  );
}
