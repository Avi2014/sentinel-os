import { Navigation, SidebarHeader } from "@/components/navigation";

export function Sidebar() {
  return (
    <aside
      className="
        hidden
        lg:flex
        w-64
        shrink-0
        flex-col
        border-r
        border-(--border)
        bg-(--surface)
      "
    >
      <SidebarHeader />

      <div className="flex-1 p-4">
        <Navigation />
      </div>
    </aside>
  );
}
