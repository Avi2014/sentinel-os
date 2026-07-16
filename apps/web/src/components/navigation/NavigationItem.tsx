import { NavLink } from "react-router-dom";
import type { NavigationItem } from "./types";

interface NavigationItemProps {
  item: NavigationItem;
}

export function NavigationItem({
  item,
}: NavigationItemProps) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",

          isActive
            ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
            : "text-[var(--foreground)] hover:bg-[var(--surface-secondary)]",
        ].join(" ")
      }
    >
      <Icon size={18} />

      <span>{item.title}</span>
    </NavLink>
  );
}