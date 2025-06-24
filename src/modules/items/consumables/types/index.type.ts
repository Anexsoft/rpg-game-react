import type { ItemBase } from "../../types/index.type";

export type ConsumableType = "healing" | "stamina";

export type Consumable = {
  type: ConsumableType;
  restoreRate: number;
} & ItemBase;
