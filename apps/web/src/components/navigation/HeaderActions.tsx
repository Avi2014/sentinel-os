import { ThemeToggle } from "../common/ThemeToggle";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-(--muted)">v0.1.0</span>

      <ThemeToggle />
    </div>
  );
}
