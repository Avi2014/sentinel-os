import { Brand } from "@/components/common/Brand";

export function Sidebar() {
  return (
    <aside
      className="
        hidden
        lg:flex
        w-64
        shrink-0
        border-r
      "
    >
      <div className="p-6"><Brand/></div>
    </aside>
  );
}
