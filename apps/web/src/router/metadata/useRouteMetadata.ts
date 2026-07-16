import { useLocation } from "react-router-dom";

import { routeMetadata } from "./metadata";

export function useRouteMetadata() {
  const { pathname } = useLocation();

  return (
    routeMetadata[pathname] ??
    routeMetadata["*"]
  );
}