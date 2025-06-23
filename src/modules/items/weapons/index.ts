import handgun9mmPic from "@resources/images/weapons/handgun-9mm.png";
import shotgunRemington from "@resources/images/weapons/shotgun-remington.png";

import type { Weapon } from "./types/index.type";

export const WEAPONS: Weapon[] = [
  {
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
  },
  {
    id: "remington-870-pump-action-shotgun",
    type: "shotgun",
    name: "Remington 870 Pump-Action Shotgun",
    description: "Powerful shotgun, best at close range.",
    picture: shotgunRemington,
    rarity: "standard",
    dmg: 12,
    target: {
      type: "multiple",
      targets: 3,
      damageMultiplier: 0.65,
    },
  },
];
