import { Outlet } from "react-router-dom";

import { useDocumentTitle } from "./useDocumentTitle";

export function RouteMetadataProvider() {
  useDocumentTitle();

  return <Outlet />;
}