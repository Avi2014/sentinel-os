import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@utils/cn";

export interface DashboardGridProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {}

export function DashboardGrid({
  children,
  className,
  ...props
}: DashboardGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6",
        "md:grid-cols-2",
        "xl:grid-cols-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

DashboardGrid.displayName = "DashboardGrid";