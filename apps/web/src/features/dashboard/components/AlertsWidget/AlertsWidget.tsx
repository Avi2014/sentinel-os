import { BellRing } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import type { Alert } from "../../types";

import { AlertItem } from "./AlertItem";
import { AlertsWidgetSkeleton } from "./AlertsWidgetSkeleton";

interface AlertsWidgetProps {
  alerts?: Alert[];
  isLoading?: boolean;
  className?: string;
  onViewAll?: () => void;
}

export function AlertsWidget({
  alerts,
  isLoading = false,
  className,
  onViewAll,
}: AlertsWidgetProps) {
  if (isLoading) {
    return <AlertsWidgetSkeleton />;
  }

  if (!alerts) {
    return null;
  }

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <BellRing className="h-5 w-5" />
            Active Alerts
          </CardTitle>

          <p className="text-muted-foreground mt-1 text-sm">
            {alerts.length} active alert{alerts.length !== 1 ? "s" : ""}
          </p>
        </div>

        <Button variant="ghost" size="sm" onClick={onViewAll}>
          View All
        </Button>
      </CardHeader>

      <CardContent>
        {alerts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <BellRing className="text-muted-foreground mb-3 h-10 w-10" />

            <h3 className="font-medium">No Active Alerts</h3>

            <p className="text-muted-foreground mt-1 text-sm">
              All monitored systems are operating normally.
            </p>
          </div>
        ) : (
          <ScrollArea className="h-[420px] pr-4">
            <div className="space-y-3">
              {alerts.map((alert) => (
                <AlertItem key={alert.id} alert={alert} />
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}

AlertsWidget.displayName = "AlertsWidget";
