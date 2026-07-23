import type { HTMLAttributes } from "react";

import { cn } from "@utils/cn";

export type WidgetFooterProps = HTMLAttributes<HTMLDivElement>;

export function WidgetFooter({
  children,
  className,
  ...props
}: WidgetFooterProps) {
  return (
    <footer
      className={cn(
        "mt-6 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4",
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  );
}

WidgetFooter.displayName = "WidgetFooter";