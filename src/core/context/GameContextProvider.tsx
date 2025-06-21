import { type ReactNode, useState } from "react";

import type { Player } from "@player/types/index.types";

import { GameContext } from "./GameContext";
import findPlayerHandler from "./handlers/find-player.handler";
import findSignedInPlayerHandler from "./handlers/find-signed-in-player.handler";
import logoutPlayerHandler from "./handlers/logout-player.handler";
import setPlayerHandler from "./handlers/set-player.handler";

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [_player, _setPlayer] = useState<Player | null>(
    findSignedInPlayerHandler()
  );

  const setPlayer = (player: Player) => setPlayerHandler(_setPlayer, player);
  const [isSidebarOpen, setIsSidebarOpen] = useState(!!_player);
  const player = _player as Player;

  return (
    <GameContext.Provider
      value={{
        player,
        setPlayer,
        findPlayer: findPlayerHandler,
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
