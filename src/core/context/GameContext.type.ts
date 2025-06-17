import type { SceneComponent } from "@scenes/types";

import type { Player } from "@player/types/player";

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
  player: Player | null;
  setPlayer: (input: SetPlayerInput) => void;
  playerExists: (name: string) => boolean;

  // Scene
  scene: SceneComponent;
  setScene: (scene: SceneComponent) => void;

  // Sidebar
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};
