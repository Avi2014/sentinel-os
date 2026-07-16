import {
  Home,
  Leaf,
  Shield,
  Settings,
} from "lucide-react";

import type { NavigationItem } from "./types";

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
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
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];