import type { WeaponId } from "@weapons/types/ids.types";

import type { ArmorId } from "@armor/types/ids.types";

import type { ConsumableId } from "@consumables/types/ids.types";

export type ItemRarity = "standard" | "rare" | "epic";
export type ItemType = "consumable" | "weapon" | "armor";

export type ItemReward = {
  type: ItemType;
  id: WeaponId | ArmorId | ConsumableId;
  prob: number;
};

export type ItemBase = {
  level: number;
  id: WeaponId | ArmorId | ConsumableId;
  name: string;
  description: string;
  picture: string;
  price: number;
  rarity: ItemRarity;
};
