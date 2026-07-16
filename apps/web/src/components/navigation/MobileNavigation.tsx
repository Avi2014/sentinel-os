import {
  Navigation,
  SidebarFooter,
  SidebarHeader,
} from "@components/navigation";
import {
  Sheet,
  SheetContent,
} from "@components/ui/sheet";

import { useNavigationStore } from "@/stores";

export function MobileNavigation() {
  const mobileOpen = useNavigationStore(
    (state) => state.mobileOpen
  );

  const closeMobile = useNavigationStore(
    (state) => state.closeMobile
  );

  return (
    <Sheet
      open={mobileOpen}
      onOpenChange={(open) => {
        if (!open) closeMobile();
      }}
    >
      <SheetContent
        side="left"
        className="w-72 p-0"
      >
        <div className="flex h-full flex-col bg-[var(--background)]">
          <SidebarHeader />

          <div className="flex-1 overflow-y-auto p-4">
            <Navigation />
          </div>

          <SidebarFooter />
        </div>
      </SheetContent>
    </Sheet>
  );
}