import type { PropsWithChildren } from "react";

interface PageSectionProps extends PropsWithChildren {
  title?: string;
  description?: string;
}

export function PageSection({
  title,
  description,
  children,
}: PageSectionProps) {
  return (
    <section className="space-y-6">
      {(title || description) && (
        <div>
          {title && (
            <h2 className="text-xl font-semibold">
              {title}
            </h2>
          )}

          {description && (
            <p className="text-sm text-[var(--muted)]">
              {description}
            </p>
          )}
        </div>
      )}

      {children}
    </section>
  );
}