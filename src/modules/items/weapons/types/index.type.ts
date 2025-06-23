import type { ItemBase, ItemRarity } from "../../types/index.type";

export type WeaponType = "handgun" | "shotgun" | "rifle" | "machinegun";

type WeaponTarget =
  | { type: "single"; damageMultiplier: 1 }
  | { type: "multiple"; targets: number; damageMultiplier: number }
  | { type: "random"; targets: number; damageMultiplier: number };

export type Weapon = {
  type: WeaponType;
  rarity: ItemRarity;

  // attributes
  dmg: number;
  target: WeaponTarget;
} & ItemBase;
