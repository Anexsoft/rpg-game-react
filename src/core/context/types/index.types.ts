import type { Player } from "@player/types/index.types";

export type GameContextType = {
  // Player
  player: Player;
  setPlayer: (player: Player) => void;
  findPlayer: (name: string) => Player | null;
  logoutPlayer: () => void;

  // Sidebar
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};
