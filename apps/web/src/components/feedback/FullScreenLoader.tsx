export function FullScreenLoader() {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[var(--background)]
      "
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="
            h-10
            w-10
            animate-spin
            rounded-full
            border-4
            border-[var(--border)]
            border-t-[var(--primary)]
          "
        />

        <p className="text-sm text-[var(--muted)]">
          Loading SentinelOS...
        </p>
      </div>
    </div>
  );
}