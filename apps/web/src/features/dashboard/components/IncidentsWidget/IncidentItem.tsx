import { AlertCircle, CheckCircle2, Clock3, Loader2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import type { Incident, IncidentStatus } from "../../types";

interface IncidentItemProps {
  incident: Incident;
  className?: string;
}

const statusVariant: Record<
  IncidentStatus,
  "default" | "secondary" | "outline" | "destructive"
> = {
  OPEN: "destructive",
  ACKNOWLEDGED: "outline",
  IN_PROGRESS: "default",
  RESOLVED: "secondary",
};

const statusIcon: Record<IncidentStatus, React.ElementType> = {
  OPEN: AlertCircle,
  ACKNOWLEDGED: Clock3,
  IN_PROGRESS: Loader2,
  RESOLVED: CheckCircle2,
};

export function IncidentItem({ incident, className }: IncidentItemProps) {
  const Icon = statusIcon[incident.status];

  return (
    <div
      className={cn(
        "hover:bg-muted/50 flex items-start gap-3 rounded-lg border p-4 transition-colors",
        className,
      )}
    >
      <Icon
        className={cn(
          "mt-0.5 h-5 w-5",
          incident.status === "IN_PROGRESS" && "animate-spin",
        )}
      />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h4 className="truncate font-medium">{incident.title}</h4>

            {incident.assignedTo && (
              <p className="text-muted-foreground mt-1 text-sm">
                Assigned to {incident.assignedTo}
              </p>
            )}
          </div>

          <Badge variant={statusVariant[incident.status]}>
            {incident.status.replace(/_/g, " ")}
          </Badge>
        </div>

        <p className="text-muted-foreground mt-3 text-xs">
          {new Date(incident.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

IncidentItem.displayName = "IncidentItem";
