import { type ReactNode, useState } from "react";

import type { Player } from "@player/types/player";

import { GameContext } from "./GameContext";
import findSignedInPlayerHandler from "./handlers/find-signed-in-player.handler";
import logoutPlayerHandler from "./handlers/logout-player.handler";
import playerExistsHandler from "./handlers/player-exists.handler";
import setPlayerHandler from "./handlers/set-player.handler";

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [player, _setPlayer] = useState<Player | null>(
    findSignedInPlayerHandler()
  );

  const setPlayer = setPlayerHandler(_setPlayer);
  const [isSidebarOpen, setIsSidebarOpen] = useState(!!player);

  return (
    <GameContext.Provider
      value={{
        player,
        setPlayer,
        playerExists: playerExistsHandler,
        isSidebarOpen,
        openSidebar: () => setIsSidebarOpen(true),
        closeSidebar: () => setIsSidebarOpen(false),
        logoutPlayer: logoutPlayerHandler,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
