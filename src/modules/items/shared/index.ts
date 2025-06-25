import type { WeaponType } from "@weapons/types/index.type";

import type { ItemRarity } from "../types/index.type";

export const RarityOrder: Record<ItemRarity, number> = {
  epic: 0,
  rare: 1,
  standard: 2,
};

export const WeaponTypeOrder: Record<WeaponType, number> = {
  rifle: 0,
  smg: 1,
  shotgun: 2,
  handgun: 3,
};

export const DEFAULT_SELL_PRICE_RATE = 0.6;
