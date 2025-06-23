import type { ItemBase } from "../../types/index.type";

export type ConsumableType = "healing" | "stamina" | "boosters";

export type ConsumablePotency = "low" | "mid" | "high";

export type Consumable = {
  type: ConsumableType;
  potency: ConsumablePotency;
} & ItemBase;
