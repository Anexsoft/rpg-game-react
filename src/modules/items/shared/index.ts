import type { WeaponType } from "@weapons/types/index.type";

import type { ConsumableType } from "@consumables/types/index.type";

import type { ItemRarity } from "../types/index.type";

export const RarityOrder: Record<ItemRarity, number> = {
  epic: 0,
  rare: 1,
  standard: 2,
};

export const WeaponTypeOrder: Record<WeaponType, number> = {
  "hand-cannon": 0,
  smg: 1,
  shotgun: 2,
  handgun: 3,
};

export const ConsumableTypeOrder: Record<ConsumableType, number> = {
  healing: 0,
  stamina: 1,
};

export const DEFAULT_SELL_PRICE_REDUCTION_RATE = 0.4;
