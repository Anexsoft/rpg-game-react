import type { HuntingZoneRewards } from "@scenes/HuntingZone/types/index.type";

export type PlayerTurn = null | "player" | "enemy";

export type CombatContextType = {
  playerTurn: PlayerTurn;
  setPlayerTurn: (v: PlayerTurn) => void;

  result: "victory" | "defeat" | null;
  setResult: (v: "victory" | "defeat" | null) => void;

  rewards: HuntingZoneRewards | null;
  setRewards: (r: HuntingZoneRewards | null) => void;
};
