import { AlertTriangle, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import type { Alert, AlertSeverity } from "../../types";

interface AlertItemProps {
  alert: Alert;
  className?: string;
}

const severityVariant: Record<
  AlertSeverity,
  "secondary" | "default" | "destructive" | "outline"
> = {
  LOW: "secondary",
  MEDIUM: "outline",
  HIGH: "default",
  CRITICAL: "destructive",
};

const severityColor: Record<AlertSeverity, string> = {
  LOW: "text-blue-600",
  MEDIUM: "text-amber-600",
  HIGH: "text-orange-600",
  CRITICAL: "text-red-600",
};

export function AlertItem({
  alert,
  className,
}: AlertItemProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50",
        className,
      )}
    >
      <AlertTriangle
        className={cn(
          "mt-0.5 h-5 w-5 shrink-0",
          severityColor[alert.severity],
        )}
      />

      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="truncate font-medium">
              {alert.title}
            </h4>

            <p className="mt-1 text-sm text-muted-foreground">
              {alert.description}
            </p>
          </div>

          <Badge variant={severityVariant[alert.severity]}>
            {alert.severity}
          </Badge>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />

          <span>{new Date(alert.createdAt).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

AlertItem.displayName = "AlertItem";