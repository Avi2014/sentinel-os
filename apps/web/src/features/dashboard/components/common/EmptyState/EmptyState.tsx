import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@utils/cn";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-75 flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)] px-6 py-12 text-center",
        className,
      )}
      {...props}
    >
      {icon ? <div className="mb-4 text-[var(--muted)]">{icon}</div> : null}

      <h2 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
        {title}
      </h2>

      {description ? (
        <p className="mt-2 max-w-md text-sm text-[var(--muted)]">
          {description}
        </p>
      ) : null}

      {action ? (
        <div className="mt-6 flex items-center justify-center">{action}</div>
      ) : null}
    </div>
  );
}
