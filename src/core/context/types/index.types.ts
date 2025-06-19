import type { Player } from "@player/types/index.types";

export type SetPlayerInput =
  | {
      action: "add";
      newPlayer: Player;
    }
  | {
      action: "reuse";
      existingPlayerName: string;
    };

export type GameContextType = {
  // Player
  player: Player;
  setPlayer: (input: SetPlayerInput) => void;
  playerExists: (name: string) => boolean;
  logoutPlayer: () => void;

  // Sidebar
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};
