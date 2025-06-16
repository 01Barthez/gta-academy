
import { create } from "zustand";

interface GlobalStoreState {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  // Ajoute ici d'autres états globaux ou persistants plus tard
}

export const useGlobalStore = create<GlobalStoreState>((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
}));
