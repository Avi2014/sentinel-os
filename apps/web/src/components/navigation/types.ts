import type { LucideIcon } from "lucide-react";

export interface NavigationItemConfig {
  title: string;
  href: string;
  icon: LucideIcon;

  disabled?: boolean;
  badge?: string;
  roles?: string[];
}

export interface NavigationGroup {
  title: string;
  items: NavigationItemConfig[];
}