import { useNavigationStore } from "@/stores";

import { navigation } from "./config";
import { NavigationItem } from "./NavigationItem";

export function Navigation() {
  const collapsed = useNavigationStore((state) => state.collapsed);

  return (
    <nav className="space-y-6">
      {navigation.map((group) => (
        <section key={group.title}>
          {!collapsed && (
            <h2
              className="
                mb-2
                px-3
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-[var(--muted)]
              "
            >
              {group.title}
            </h2>
          )}

          <div className={collapsed ? "flex flex-col items-center gap-2" : "space-y-1"}>
            {group.items.map((item) => (
              <NavigationItem key={item.href} item={item} />
            ))}
          </div>
        </section>
      ))}
    </nav>
  );
}
