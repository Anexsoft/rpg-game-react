/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ReactNode, useState } from "react";

import { logger } from "@shared/logger";


import type { SceneComponent } from "@scenes/types";
import WelcomeScene from "@scenes/Welcome/Welcome";

import type { Player } from "@player/types/player";

import { GameContext } from "./GameContext";
import type { SetPlayerInput } from "./GameContext.type";

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [player, _setPlayer] = useState<Player | null>(null);
  const [scene, setScene] = useState<SceneComponent>(<WelcomeScene />);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const setPlayer = (input: SetPlayerInput) => {
    let key: string;
    let playerToSet: Player | null = null;

    if (input.action === "reuse") {
      key = `P_${input.existingPlayerName.toUpperCase()}`;
      const stored = localStorage.getItem(key);

      if (stored) {
        logger.debug(`Existing player data found for key: ${key}`);

        try {
          const parsed = JSON.parse(stored) as Player;
          playerToSet = parsed;
        } catch (e: any) {
          throw new Error(`Player could not be retrevied from db ${e.message}`);
        }
      } else {
        throw new Error(
          `No existing player found with name: ${input.existingPlayerName}`
        );
      }
    } else if (input.action === "add") {
      key = `P_${input.newPlayer.name.toUpperCase()}`;

      logger.debug(
        `No existing player data found. Storing new player for key: ${key}`
      );

      localStorage.setItem(key, JSON.stringify(input.newPlayer));
      playerToSet = input.newPlayer;
    }

    if (playerToSet) {
      _setPlayer(playerToSet);
    }
  };

  const playerExists = (name: string) => {
    const key = `P_${name.toUpperCase()}`;
    const stored = localStorage.getItem(key);

    return !!stored;
  };

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <GameContext.Provider
      value={{
        player,
        setPlayer,
        scene,
        setScene,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        playerExists,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
