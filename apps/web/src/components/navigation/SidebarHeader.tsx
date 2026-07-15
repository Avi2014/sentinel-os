import { AppBrand } from "./AppBrand";

export function SidebarHeader() {
  return (
    <div className="border-b border-(--border) p-5">
      <AppBrand />
    </div>
  );
}
