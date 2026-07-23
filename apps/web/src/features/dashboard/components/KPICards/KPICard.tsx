import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { KPICardData } from "./types";

const valueColor: Record<
  NonNullable<KPICardData["variant"]>,
  string
> = {
  default: "text-foreground",
  success: "text-emerald-600 dark:text-emerald-400",
  warning: "text-amber-600 dark:text-amber-400",
  danger: "text-red-600 dark:text-red-400",
};

interface KPICardProps {
  data: KPICardData;
  className?: string;
}

export function KPICard({
  data,
  className,
}: KPICardProps) {
  const {
    title,
    value,
    subtitle,
    icon,
    variant = "default",
  } = data;

  return (
    <Card
      className={cn(
        "transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>

        <div className="text-muted-foreground">
          {icon}
        </div>
      </CardHeader>

      <CardContent>
        <div
          className={cn(
            "text-3xl font-bold tracking-tight",
            valueColor[variant]
          )}
        >
          {value}
        </div>

        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
}