import { Outlet } from "react-router-dom";

import {
  Header,
  Main,
  PageContainer,
  Sidebar,
} from "./components";

export function AppLayout() {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Header />

        <Main>

          <PageContainer>

            <Outlet />

          </PageContainer>

        </Main>

      </div>

    </div>
  );
}