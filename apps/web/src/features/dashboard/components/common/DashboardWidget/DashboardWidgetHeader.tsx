import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@utils/cn";

export interface DashboardWidgetHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function DashboardWidgetHeader({
  title,
  subtitle,
  action,
  className,
  ...props
}: DashboardWidgetHeaderProps) {
  return (
    <header
      className={cn("mb-6 flex items-start justify-between gap-4", className)}
      {...props}
    >
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-base font-semibold tracking-tight text-[var(--foreground)]">
          {title}
        </h2>

        {subtitle ? (
          <p className="mt-1 text-sm text-[var(--muted)]">{subtitle}</p>
        ) : null}
      </div>

      {action ? (
        <div className="flex shrink-0 items-center gap-2">{action}</div>
      ) : null}
    </header>
  );
}

DashboardWidgetHeader.displayName = "DashboardWidgetHeader";
