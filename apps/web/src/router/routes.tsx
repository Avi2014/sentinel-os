import type { RouteObject } from "react-router-dom";

import { AppLayout } from "@/layouts";
import { HomePage, LazyLoader, NotFoundPage } from "@/router/lazy";

export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <LazyLoader>
            <HomePage />
          </LazyLoader>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <LazyLoader>
        <NotFoundPage />
      </LazyLoader>
    ),
  },
];