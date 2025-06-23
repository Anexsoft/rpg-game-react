import type { ItemRarity } from "../../types/index.type";

export type WeaponType = "handgun" | "shotgun" | "rifle" | "machinegun";

type WeaponTarget =
  | { type: "single"; damageMultiplier: 1 }
  | { type: "multiple"; targets: number; damageMultiplier: number }
  | { type: "random"; targets: number; damageMultiplier: number };

export type Weapon = {
  id: string;
  type: WeaponType;
  rarity: ItemRarity;
  name: string;
  description: string;
  picture: string;

  // attributes
  dmg: number;
  target: WeaponTarget;
};
