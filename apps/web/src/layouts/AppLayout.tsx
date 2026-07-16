import { Outlet } from "react-router-dom";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import { MobileNavigation } from "@components/navigation";

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <Sidebar />

      <MobileNavigation />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main
          className="
            flex-1
            overflow-y-auto
            bg-[var(--background)]
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-screen-2xl
              px-6
              py-6
              lg:px-8
              lg:py-8
            "
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}