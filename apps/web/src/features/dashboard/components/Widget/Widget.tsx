import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@utils/cn";

export interface WidgetProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  /**
   * Makes the widget occupy the available height.
   */
  fullHeight?: boolean;

  /**
   * Removes the default padding.
   */
  noPadding?: boolean;

  /**
   * Adds a subtle hover effect.
   */
  hoverable?: boolean;
}

export function Widget({
  children,
  className,
  fullHeight = false,
  noPadding = false,
  hoverable = true,
  ...props
}: WidgetProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-xl border",
        "border-[var(--border)]",
        "bg-[var(--card)]",
        "text-[var(--card-foreground)]",
        "shadow-sm",
        "transition-all duration-200",
        hoverable &&
          "hover:-translate-y-0.5 hover:shadow-md",
        fullHeight && "h-full",
        !noPadding && "p-6",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

Widget.displayName = "Widget";