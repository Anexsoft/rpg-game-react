import type { HuntingZoneRewards } from "@scenes/HuntingZone/types/index.type";

export type PlayerTurn = null | "player" | "enemy";

export type CombatResult = "victory" | "defeat" | null;

export type CombatContextType = {
  playerTurn: PlayerTurn;
  setPlayerTurn: (v: PlayerTurn) => void;

  result: CombatResult;
  setResult: (v: CombatResult) => void;

  rewards: HuntingZoneRewards | null;
  setRewards: (r: HuntingZoneRewards | null) => void;
};
