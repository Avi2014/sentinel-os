import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NavigationStore {
  collapsed: boolean;

  toggle: () => void;

  expand: () => void;

  collapse: () => void;
}

export const useNavigationStore =
  create<NavigationStore>()(
    persist(
      (set) => ({
        collapsed: false,

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
      }),
      {
        name: "sentinel-navigation",
      }
    )
  );