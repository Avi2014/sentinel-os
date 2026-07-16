import { PanelLeft } from "lucide-react";

import { ThemeToggle } from "@components/common";
import { useNavigationStore } from "@/stores";

export function HeaderActions() {
  const toggle = useNavigationStore(
    (state) => state.toggle
  );

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={toggle}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-md
          border
          border-[var(--border)]
          hover:bg-[var(--surface-secondary)]
        "
        aria-label="Toggle sidebar"
      >
        <PanelLeft size={18} />
      </button>

      <span className="text-sm text-[var(--muted)]">
        v0.1.0
      </span>

      <ThemeToggle />
    </div>
  );
}