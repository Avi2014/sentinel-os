import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { routeMetadata } from "./metadata";

const APP_NAME = "SentinelOS";

export function useDocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page =
      routeMetadata[pathname] ??
      routeMetadata["*"];

    document.title = `${page.title} • ${APP_NAME}`;
  }, [pathname]);
}