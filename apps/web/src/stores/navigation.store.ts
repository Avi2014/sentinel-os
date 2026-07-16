import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NavigationStore {
  // Desktop sidebar
  collapsed: boolean;

  // Mobile drawer
  mobileOpen: boolean;

  // Desktop actions
  toggle: () => void;
  expand: () => void;
  collapse: () => void;

  // Mobile actions
  openMobile: () => void;
  closeMobile: () => void;
}

export const useNavigationStore = create<NavigationStore>()(
  persist(
    (set) => ({
      // Initial state
      collapsed: false,
      mobileOpen: false,

      // Desktop
      toggle: () =>
        set((state) => ({
          collapsed: !state.collapsed,
        })),

      expand: () =>
        set({
          collapsed: false,
        }),

      collapse: () =>
        set({
          collapsed: true,
        }),

      // Mobile
      openMobile: () =>
        set({
          mobileOpen: true,
        }),

      closeMobile: () =>
        set({
          mobileOpen: false,
        }),
    }),
    {
      name: "sentinel-navigation",

      // Persist ONLY desktop preference
      partialize: (state) => ({
        collapsed: state.collapsed,
      }),
    }
  )
);