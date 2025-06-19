import type { Player } from "@player/types/index.types";

import { SIGNED_IN_KEY } from "../defs";

export default () => {
  const key = localStorage.getItem(SIGNED_IN_KEY);

  if (key) {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        return JSON.parse(stored) as Player;
      } catch {
        return null;
      }
    }
  }

  return null;
};
