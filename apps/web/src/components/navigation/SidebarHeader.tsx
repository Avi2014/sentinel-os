import { AppBrand } from "./AppBrand";

import { useNavigationStore } from "@stores";

export function SidebarHeader() {
  const collapsed = useNavigationStore((state) => state.collapsed);

  return (
    <div
      className="
        flex
        h-20
        items-center
        justify-center
        border-b
        border-[var(--border)]
        px-4
      "
    >
      {collapsed ? (
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            bg-[var(--primary)]
            text-lg
            font-bold
            text-[var(--primary-foreground)]
          "
        >
          S
        </div>
      ) : (
        <AppBrand />
      )}
    </div>
  );
}
