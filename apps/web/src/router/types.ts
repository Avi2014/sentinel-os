import type { ReactNode } from "react";

export interface RouteMetadata {
  title: string;

  description?: string;

  breadcrumb?: string;

  requiresAuth?: boolean;

  icon?: ReactNode;
}