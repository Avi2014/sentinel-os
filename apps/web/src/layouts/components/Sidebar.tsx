import { Brand } from "@/components/common/Brand";

export function Sidebar() {
  return (
    <aside
      className="
        hidden
        lg:flex
        w-72
        shrink-0
        border-r
        bg-background
      "
    >
      <div className="p-6"><Brand/></div>
    </aside>
  );
}
