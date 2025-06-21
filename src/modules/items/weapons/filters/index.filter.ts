import type { WeaponType } from "@weapons/types/index.type";

import { RarityOrder, WeaponTypeOrder } from "../../shared/index";
import type { ItemRarity } from "../../types/index.type";

export const sortWeaponByRarityAndName = (
  a: { rarity: ItemRarity; type: WeaponType; name: string },
  b: { rarity: ItemRarity; type: WeaponType; name: string }
) => {
  const rarityDiff = RarityOrder[a.rarity] - RarityOrder[b.rarity];
  if (rarityDiff !== 0) return rarityDiff;

  const typeDiff = WeaponTypeOrder[a.type] - WeaponTypeOrder[b.type];
  if (typeDiff !== 0) return typeDiff;

  return a.name.localeCompare(b.name);
};
