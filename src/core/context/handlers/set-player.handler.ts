import type { Player } from "@player/types/index.types";

import { SIGNED_IN_KEY, STORED_PLAYER_PREFIX } from "../defs";

export default function setPlayerHandler(
  setPlayer: React.Dispatch<React.SetStateAction<Player | null>>,
  player: Player,
): void {
  const key = STORED_PLAYER_PREFIX.replace("player", player.name.toUpperCase());

  localStorage.setItem(key, JSON.stringify(player));
  localStorage.setItem(SIGNED_IN_KEY, key);

  setPlayer(player);
}
