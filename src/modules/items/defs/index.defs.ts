import type { WeaponType } from "@weapons/types/index.type";

import type { ItemRarity } from "../types/index.type";

export const RarityOrder: Record<ItemRarity, number> = {
  epic: 0,
  rare: 1,
  standard: 2,
};

export const WeaponTypeOrder: Record<WeaponType, number> = {
  handgun: 0,
  shotgun: 1,
  machinegun: 2,
  rifle: 3,
};
