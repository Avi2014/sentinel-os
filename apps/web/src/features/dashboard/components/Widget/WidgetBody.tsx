import type { HTMLAttributes } from "react";

import { cn } from "@utils/cn";

export interface WidgetBodyProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Centers the content vertically and horizontally.
   */
  centered?: boolean;

  /**
   * Makes the body fill the remaining widget height.
   */
  fullHeight?: boolean;
}

export function WidgetBody({
  children,
  className,
  centered = false,
  fullHeight = false,
  ...props
}: WidgetBodyProps) {
  return (
    <div
      className={cn(
        "min-w-0",
        fullHeight && "flex-1",
        centered &&
          "flex items-center justify-center text-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

WidgetBody.displayName = "WidgetBody";