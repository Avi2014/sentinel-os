import { Button } from "@/components/ui/button";
import { PageHeader } from "@components/common";
import { RefreshCw } from "lucide-react";

import { formatDateTime } from "@utils/date";

export interface DashboardHeaderProps {
  title: string;

  description: string;

  lastUpdated?: string | Date;

  isRefreshing?: boolean;

  onRefresh?: () => void;
}

export function DashboardHeader({
  title,
  description,
  lastUpdated,
  isRefreshing = false,
  onRefresh,
}: DashboardHeaderProps) {
  const actions = (
    <div className="flex items-center gap-4">
      {lastUpdated ? (
        <span className="hidden text-sm text-[var(--muted)] md:inline">
          Last updated{" "}
          {formatDateTime(lastUpdated)}
        </span>
      ) : null}

      <Button
        variant="outline"
        size="sm"
        onClick={onRefresh}
        disabled={isRefreshing}
        aria-label="Refresh dashboard"
      >
        <RefreshCw
          className={[
            "mr-2 h-4 w-4",
            isRefreshing ? "animate-spin" : "",
          ].join(" ")}
        />

        Refresh
      </Button>
    </div>
  );

  return (
    <PageHeader
      title={title}
      description={description}
      actions={actions}
    />
  );
}

DashboardHeader.displayName =
  "DashboardHeader";