import type { Player } from "@player/types/index.types";

import { STORED_PLAYER_PREFIX } from "../defs";

export default (name: string): Player | null => {
  const key = STORED_PLAYER_PREFIX.replace("player", name.toUpperCase());
  const stored = localStorage.getItem(key);

  if (!stored) {
    return null;
  }

  return JSON.parse(stored);
};
