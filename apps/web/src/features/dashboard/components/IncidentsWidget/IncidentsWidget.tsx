import { ClipboardList } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import type { Incident } from "../../types";

import { IncidentItem } from "./IncidentItem"; 
import { IncidentsWidgetSkeleton } from "@/features/dashboard/components/IncidentsWidget/IncidentsWidgetSkeleton";

interface IncidentsWidgetProps {
  incidents?: Incident[];
  isLoading?: boolean;
  className?: string;
  onViewAll?: () => void;
}

export function IncidentsWidget({
  incidents,
  isLoading = false,
  className,
  onViewAll,
}: IncidentsWidgetProps) {
  if (isLoading) {
    return <IncidentsWidgetSkeleton />;
  }

  if (!incidents) {
    return null;
  }

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            Open Incidents
          </CardTitle>

          <p className="text-muted-foreground mt-1 text-sm">
            {incidents.length} incident
            {incidents.length !== 1 ? "s" : ""}
          </p>
        </div>

        <Button variant="ghost" size="sm" onClick={onViewAll}>
          View All
        </Button>
      </CardHeader>

      <CardContent>
        {incidents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <ClipboardList className="text-muted-foreground mb-3 h-10 w-10" />

            <h3 className="font-medium">No Open Incidents</h3>

            <p className="text-muted-foreground mt-1 text-sm">
              There are currently no active incidents.
            </p>
          </div>
        ) : (
          <ScrollArea className="h-[420px] pr-4">
            <div className="space-y-3">
              {incidents.map((incident) => (
                <IncidentItem key={incident.id} incident={incident} />
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}

IncidentsWidget.displayName = "IncidentsWidget";
