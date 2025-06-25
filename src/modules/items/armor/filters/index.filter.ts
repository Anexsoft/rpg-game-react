import { RarityOrder } from "../../shared/index";
import type { ItemRarity } from "../../types/index.type";

export const sortArmorByRarityAndName = (
  a: { rarity: ItemRarity; name: string },
  b: { rarity: ItemRarity; name: string },
) => {
  const rarityDiff = RarityOrder[a.rarity] - RarityOrder[b.rarity];

  if (rarityDiff !== 0) {
    return rarityDiff;
  }

  return b.name.localeCompare(a.name);
};
