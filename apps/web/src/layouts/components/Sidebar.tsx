import { Navigation, SidebarFooter, SidebarHeader } from "@components/navigation";

import { useNavigationStore } from "@/stores";

export function Sidebar() {
  const collapsed = useNavigationStore((state) => state.collapsed);

  return (
    <aside
  className={[
    "hidden lg:flex shrink-0 flex-col",
    "border-r border-[var(--border)]",
    "bg-[var(--surface)]",
    "transition-[width] duration-300 ease-in-out",
    collapsed ? "w-20" : "w-64",
  ].join(" ")}
>
      <SidebarHeader />

      <div className="flex-1 overflow-y-auto p-4">
        <Navigation />
      </div>

      <SidebarFooter />
    </aside>
  );
}
