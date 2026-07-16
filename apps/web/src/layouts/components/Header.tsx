import { HeaderActions } from "@/components/navigation";

export function Header() {
  return (
    <header
      className="
        flex
        h-16
        items-center
        justify-between
        border-b
        border-(--border)
        bg-(--surface)
        px-6
      "
    >
      <div>
        <h1 className="text-lg font-semibold tracking-tight">SentinelOS</h1>

        <p
          className="
      text-xs
      text-[var(--muted)]
    "
        >
          Enterprise Monitoring Platform
        </p>
      </div>

      <HeaderActions />
    </header>
  );
}
