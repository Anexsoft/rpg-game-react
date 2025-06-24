import { createContext, useContext } from "react";

import type { CombatContextType } from "./types";

export const CombatContext = createContext<CombatContextType | null>(null);

export function useCombat() {
  const ctx = useContext(CombatContext);
  if (!ctx) throw new Error("useCombat must be used within a CombatProvider");
  return ctx;
}
