import type { ItemBase } from "@src/modules/items/types/index.type";
import type { ZoneId } from "@src/modules/zones/types/ids.types";

export type HuntingZoneSceneProps = {
  zoneId: ZoneId;
};

export type HuntingZoneRewards = {
  gold: number;
  exp: number;
  rewards: ItemBase[];
};

export type CombatStage = "start" | "combat" | "result";
