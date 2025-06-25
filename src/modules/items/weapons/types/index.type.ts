import type { ItemBase, ItemRarity } from "../../types/index.type";

export type WeaponType = "handgun" | "shotgun" | "rifle" | "smg";

type WeaponTarget = {
  type: "single" | "multiple" | "random";
  dmgMultiplier: number;
  targets: number;
};

export type Weapon = {
  type: WeaponType;
  rarity: ItemRarity;

  // attributes
  dmg: number;
  target: WeaponTarget;
} & ItemBase;
