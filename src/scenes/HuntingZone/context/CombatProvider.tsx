import { useState } from "react";

import type { HuntingZoneRewards } from "../types/index.type";

import { CombatContext } from "./CombatContext";
import type { PlayerTurn } from "./types";

export function CombatProvider({ children }: { children: React.ReactNode }) {
  const [playerTurn, setPlayerTurn] = useState<PlayerTurn>(null);
  const [result, setResult] = useState<"victory" | "defeat" | null>(null);
  const [rewards, setRewards] = useState<HuntingZoneRewards | null>(null);

  return (
    <CombatContext.Provider
      value={{
        playerTurn,
        setPlayerTurn,
        result,
        setResult,
        rewards,
        setRewards,
      }}
    >
      {children}
    </CombatContext.Provider>
  );
}
