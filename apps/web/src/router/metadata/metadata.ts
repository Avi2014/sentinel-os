import type { RouteMetadata } from "../types";

export const routeMetadata: Record<string, RouteMetadata> = {
  "/": {
    title: "Dashboard",
    description: "Enterprise monitoring dashboard.",
    breadcrumb: "Dashboard",
  },

  "/plants": {
    title: "Plants",
    description: "Manage industrial plants.",
    breadcrumb: "Plants",
    requiresAuth: true,
  },

  "/monitoring": {
    title: "Monitoring",
    description: "Real-time monitoring.",
    breadcrumb: "Monitoring",
    requiresAuth: true,
  },

  "/settings": {
    title: "Settings",
    description: "Application settings.",
    breadcrumb: "Settings",
    requiresAuth: true,
  },

  "*": {
    title: "Page Not Found",
    description: "Unknown route",
  },
};