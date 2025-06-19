/* eslint-disable @typescript-eslint/no-explicit-any */
import { logger } from "@shared/logger";

import type { Player } from "@player/types/index.types";

import { SIGNED_IN_KEY, STORED_PLAYER_PREFIX } from "../defs";
import type { SetPlayerInput } from "../types/index.types";

export default (
  setPlayer: React.Dispatch<React.SetStateAction<Player | null>>,
) => {
  return (input: SetPlayerInput) => {
    let key: string | null = null;
    let playerToSet: Player | null = null;

    if (input.action === "reuse") {
      key = STORED_PLAYER_PREFIX.replace(
        "player",
        input.existingPlayerName.toUpperCase(),
      );
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
          `No existing player found with name: ${input.existingPlayerName}`,
        );
      }
    } else if (input.action === "add") {
      key = STORED_PLAYER_PREFIX.replace(
        "player",
        input.newPlayer.name.toUpperCase(),
      );

      logger.debug(
        `No existing player data found. Storing new player for key: ${key}`,
      );

      localStorage.setItem(key, JSON.stringify(input.newPlayer));
      playerToSet = input.newPlayer;
    }

    if (playerToSet && key) {
      setPlayer(playerToSet);
      localStorage.setItem(SIGNED_IN_KEY, key);
    }
  };
};
