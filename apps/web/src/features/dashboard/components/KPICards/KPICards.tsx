import {
  AlertTriangle,
  Bot,
  Factory,
  ShieldAlert,
} from "lucide-react";

        import type { DashboardSummary } from "../../types";

import { KPICard } from "./KPICard";
import { KPICardSkeleton } from "./KPICardSkeleton";
import type { KPICardData } from "./types";

interface KPICardsProps {
  summary?: DashboardSummary;
  isLoading?: boolean;
  className?: string;
}

export function KPICards({
  summary,
  isLoading = false,
  className,
}: KPICardsProps) {
  if (isLoading) {
    return (
      <section
        className={className}
        aria-label="Dashboard KPI loading"
      >
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
  <KPICardSkeleton key={index} />
))}
        </div>
      </section>
    );
  }

  if (!summary) {
    return null;
  }

  const cards: KPICardData[] = [
    {
      title: "Plants",
      value: summary.totalPlants,
      subtitle: `${summary.onlinePlants} online • ${summary.offlinePlants} offline`,
      icon: <Factory className="h-5 w-5" />,
    },
    {
      title: "Active Alerts",
      value: summary.activeAlerts,
      subtitle: "Requires attention",
      icon: <AlertTriangle className="h-5 w-5" />,
      variant: "danger",
    },
    {
      title: "Open Incidents",
      value: summary.openIncidents,
      subtitle: "Under investigation",
      icon: <ShieldAlert className="h-5 w-5" />,
      variant: "warning",
    },
    {
      title: "AI Recommendations",
      value: summary.aiRecommendations,
      subtitle: "Generated insights",
      icon: <Bot className="h-5 w-5" />,
      variant: "success",
    },
  ];

  return (
    <section
      className={className}
      aria-label="Dashboard KPI cards"
    >
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <KPICard
            key={card.title}
            data={card}
          />
        ))}
      </div>
    </section>
  );
}