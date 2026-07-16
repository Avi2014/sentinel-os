import { lazy } from "react";

export const HomePage = lazy(() =>
  import("@pages/HomePage").then((module) => ({
    default: module.HomePage,
  }))
);

export const NotFoundPage = lazy(() =>
  import("@pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  }))
);