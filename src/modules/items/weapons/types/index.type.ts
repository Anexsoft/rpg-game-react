import type { ItemRarity } from "../../types/index.type";

export type WeaponType = "handgun" | "shotgun" | "rifle" | "machinegun";

export type Weapon = {
  type: WeaponType;
  rarity: ItemRarity;
  name: string;
  description: string;
  picture: string;
};
