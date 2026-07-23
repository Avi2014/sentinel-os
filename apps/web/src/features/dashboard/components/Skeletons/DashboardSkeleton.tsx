import { DashboardGrid } from "../DashboardGrid";
import { WidgetSkeleton } from "./WidgetSkeleton";

export function DashboardSkeleton() {
  return (
    <DashboardGrid>
      <div className="xl:col-span-8">
        <WidgetSkeleton />
      </div>

      <div className="xl:col-span-4">
        <WidgetSkeleton />
      </div>

      <div className="xl:col-span-4">
        <WidgetSkeleton />
      </div>

      <div className="xl:col-span-4">
        <WidgetSkeleton />
      </div>

      <div className="xl:col-span-4">
        <WidgetSkeleton />
      </div>
    </DashboardGrid>
  );
}

DashboardSkeleton.displayName = "DashboardSkeleton";