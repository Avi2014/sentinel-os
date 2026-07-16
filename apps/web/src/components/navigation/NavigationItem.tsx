import { NavLink } from "react-router-dom";

import type { NavigationItemConfig } from "./types";
import { useNavigationStore } from "@/stores";

interface NavigationItemProps {
  item: NavigationItemConfig;
}

export function NavigationItem({ item }: NavigationItemProps) {
  const collapsed = useNavigationStore((state) => state.collapsed);
  const closeMobile = useNavigationStore((state) => state.closeMobile);
  const Icon = item.icon;

  if (item.disabled) {
    return (
      <div
        title={collapsed ? item.title : undefined}
        className={[
          "flex cursor-not-allowed rounded-lg opacity-50 transition-all",

          collapsed ? "h-11 w-11 items-center justify-center" : "items-center gap-3 px-3 py-2",
        ].join(" ")}
      >
        <Icon size={20} />

        {!collapsed && (
          <>
            <span>{item.title}</span>

            {item.badge && (
              <span
                className="
                  ml-auto
                  rounded
                  bg-(--surface-secondary)
                  px-2
                  py-0.5
                  text-xs
                "
              >
                {item.badge}
              </span>
            )}
          </>
        )}
      </div>
    );
  }

  return (
    <NavLink
      to={item.href}
      title={collapsed ? item.title : undefined}
      onClick={closeMobile}
      className={({ isActive }) =>
        [
          "flex rounded-lg transition-all duration-200",

          collapsed
            ? "h-11 w-11 items-center justify-center"
            : "items-center gap-3 border-l-4 border-transparent px-3 py-2 text-sm font-medium",

          isActive
            ? collapsed
              ? "bg-(--surface-secondary) text-(--primary)"
              : "border-(--primary) bg-(--surface-secondary) font-semibold"
            : "text-(--foreground) hover:bg-(--surface-secondary)",
        ].join(" ")
      }
    >
      <Icon size={20} />

      {!collapsed && (
        <>
          <span>{item.title}</span>

          {item.badge && (
            <span
              className="
                ml-auto
                rounded
                bg-(--primary)
                px-2
                py-0.5
                text-xs
                text-(--primary-foreground)
              "
            >
              {item.badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  );
}
