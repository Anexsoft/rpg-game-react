import type { WeaponType } from "@weapons/types/index.type";

import { RarityOrder, WeaponTypeOrder } from "../../shared/index";
import type { ItemRarity } from "../../types/index.type";

export const sortWeaponByRarityAndName = (
  a: { type: WeaponType; rarity: ItemRarity; name: string },
  b: { type: WeaponType; rarity: ItemRarity; name: string },
) => {
  const typeDiff = WeaponTypeOrder[a.type] - WeaponTypeOrder[b.type];
  if (typeDiff !== 0) return typeDiff;

  const rarityDiff = RarityOrder[a.rarity] - RarityOrder[b.rarity];
  if (rarityDiff !== 0) return rarityDiff;

  return b.name.localeCompare(a.name);
};
