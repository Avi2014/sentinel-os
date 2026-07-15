interface ErrorStateProps {
  title?: string;
  description?: string;
}

export function ErrorState({ title = "Something went wrong", description }: ErrorStateProps) {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center text-center">
      <h2 className="text-xl font-semibold text-(--danger)">{title}</h2>

      {description && <p className="mt-2 max-w-md text-sm text-(--muted)">{description}</p>}
    </div>
  );
}
