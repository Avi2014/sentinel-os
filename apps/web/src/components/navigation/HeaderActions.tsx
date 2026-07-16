import { ThemeToggle } from "@components/common";
import { Menu, PanelLeft } from "lucide-react";

import { useNavigationStore } from "@/stores";

export function HeaderActions() {
  const toggle = useNavigationStore((state) => state.toggle);
  const openMobile = useNavigationStore((state) => state.openMobile);

  return (
    <div className="flex items-center gap-3">
      <>
        {/* Mobile */}

        <button
          onClick={openMobile}
          className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-md
      border
      border-[var(--border)]
      lg:hidden
    "
        >
          <Menu size={18} />
        </button>

        {/* Desktop */}

        <button
          onClick={toggle}
          className="
      hidden
      lg:flex
      h-10
      w-10
      items-center
      justify-center
      rounded-md
      border
      border-[var(--border)]
    "
        >
          <PanelLeft size={18} />
        </button>
      </>

      <span className="text-sm text-[var(--muted)]">v0.1.0</span>

      <ThemeToggle />
    </div>
  );
}
