import type { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

import { cn } from "@utils/cn";

import { Widget } from "../../Widget";

import { DashboardWidgetHeader } from "./DashboardWidgetHeader";

export interface DashboardWidgetProps
  extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  fullHeight?: boolean;
  noPadding?: boolean;
  hoverable?: boolean;
}

export function DashboardWidget({
  children,
  className,
  title,
  subtitle,
  action,
  fullHeight = false,
  noPadding = false,
  hoverable = true,
  ...props
}: DashboardWidgetProps) {
  return (
    <Widget
      className={cn(className)}
      fullHeight={fullHeight}
      noPadding={noPadding}
      hoverable={hoverable}
      {...props}
    >
      <DashboardWidgetHeader
        title={title}
        subtitle={subtitle}
        action={action}
      />

      {children}
    </Widget>
  );
}

DashboardWidget.displayName = "DashboardWidget";
