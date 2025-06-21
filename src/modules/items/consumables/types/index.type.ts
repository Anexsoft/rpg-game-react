import type { ConsumableId } from "./ids.types";

export type ConsumableType = "healing" | "stamina" | "boosters";

export type ConsumablePotency = "low" | "mid" | "high";

export type Consumable = {
  id: ConsumableId;
  type: ConsumableType;
  potency: ConsumablePotency;
  name: string;
  description: string;
  picture: string;
};
