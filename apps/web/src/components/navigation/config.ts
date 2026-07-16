import {
  Home,
  Leaf,
  Settings,
  Shield,
} from "lucide-react";

import type { NavigationGroup } from "./types";

export const navigation: NavigationGroup[] = [
  {
    title: "Platform",

    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: Home,
      },
    ],
  },

  {
    title: "Operations",

    items: [
      {
        title: "Plants",
        href: "/plants",
        icon: Leaf,
      },

      {
        title: "Monitoring",
        href: "/monitoring",
        icon: Shield,
      },
    ],
  },

  {
    title: "Administration",

    items: [
      {
        title: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];