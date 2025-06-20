import type { ItemRarity } from "../../types/index.type";

import type { ArmorId } from "./ids.types";

export type Armor = {
  id: ArmorId;
  rarity: ItemRarity;
  name: string;
  description: string;
  picture: string;
};
