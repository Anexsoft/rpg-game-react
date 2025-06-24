import handgun9mmPic from "@resources/images/weapons/handgun-9mm.png";
import shotgunRemington from "@resources/images/weapons/shotgun-remington.png";

import type { WeaponId } from "./types/ids.types";
import type { Weapon } from "./types/index.type";

function createVariation(id: WeaponId, base: Weapon, level: number) {
  return {
    id,
    name: `${base.name}+${level}`,
    dmg: Math.round(base.dmg * (1 + 0.25 * level)),
  };
}

export const BASE_HANDGUN: Weapon = {
  id: "9mm-semi-automatic-handgun",
  type: "handgun",
  name: "9mm Semi-Automatic Handgun",
  description: "Reliable sidearm for close to mid-range.",
  picture: handgun9mmPic,
  rarity: "standard",
  dmg: 7,
  target: {
    type: "single",
    damageMultiplier: 1,
  },
};

export const BASE_SHOTGUN: Weapon = {
  id: "remington-870-pump-action-shotgun",
  type: "shotgun",
  name: "Remington 870 Pump-Action Shotgun",
  description: "Powerful shotgun, best at close range.",
  picture: shotgunRemington,
  rarity: "standard",
  dmg: 10,
  target: {
    type: "multiple",
    targets: 3,
    damageMultiplier: 0.65,
  },
};

export const WEAPONS: Weapon[] = [
  // Handgun +0 to +5
  BASE_HANDGUN,
  {
    ...BASE_HANDGUN,
    ...createVariation("9mm-semi-automatic-handgun+1", BASE_HANDGUN, 1),
  },
  {
    ...BASE_HANDGUN,
    ...createVariation("9mm-semi-automatic-handgun+2", BASE_HANDGUN, 2),
  },
  {
    ...BASE_HANDGUN,
    ...createVariation("9mm-semi-automatic-handgun+3", BASE_HANDGUN, 3),
  },
  {
    ...BASE_HANDGUN,
    ...createVariation("9mm-semi-automatic-handgun+4", BASE_HANDGUN, 4),
  },
  {
    ...BASE_HANDGUN,
    ...createVariation("9mm-semi-automatic-handgun+5", BASE_HANDGUN, 5),
  },

  // Shotgun +0 to +5
  BASE_SHOTGUN,
  {
    ...BASE_SHOTGUN,
    ...createVariation("remington-870-pump-action-shotgun+1", BASE_SHOTGUN, 1),
  },
  {
    ...BASE_SHOTGUN,
    ...createVariation("remington-870-pump-action-shotgun+2", BASE_SHOTGUN, 2),
  },
  {
    ...BASE_SHOTGUN,
    ...createVariation("remington-870-pump-action-shotgun+3", BASE_SHOTGUN, 3),
  },
  {
    ...BASE_SHOTGUN,
    ...createVariation("remington-870-pump-action-shotgun+4", BASE_SHOTGUN, 4),
  },
  {
    ...BASE_SHOTGUN,
    ...createVariation("remington-870-pump-action-shotgun+5", BASE_SHOTGUN, 5),
  },
];
