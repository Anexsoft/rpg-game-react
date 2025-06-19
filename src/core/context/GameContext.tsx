import { createContext, useContext } from "react";

import type { GameContextType } from "./types/index.types";

export const GameContext = createContext<GameContextType | undefined>(
  undefined,
);

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }

  return context;
}
