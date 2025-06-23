import type { ItemBase, ItemRarity } from "../../types/index.type";

export type Armor = {
  rarity: ItemRarity;

  // attributes
  def: number;
} & ItemBase;
