interface EmptyStateProps {
  title: string;
  description?: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center text-center">
      <h2 className="text-xl font-semibold">{title}</h2>

      {description && <p className="mt-2 max-w-md text-sm text-[var(--muted)]">{description}</p>}
    </div>
  );
}
