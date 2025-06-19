import handgun9mmPic from "@resources/images/weapons/handgun-9mm.png";
import shotgunRemington from "@resources/images/weapons/shotgun-remington.png";

import type { Weapon } from "./types/index.type";

export const WEAPONS: Weapon[] = [
  {
    type: "handgun",
    name: "9mm Semi-Automatic Handgun",
    description:
      "A reliable sidearm with moderate accuracy and quick reload. Ideal for close to mid-range encounters.",
    picture: handgun9mmPic,
    rarity: "standard",
  },
  {
    type: "shotgun",
    name: "Remington 870 Pump-Action Shotgun",
    description:
      "A powerful pump-action shotgun, effective at close range with high stopping power and wide spread.",
    picture: shotgunRemington,
    rarity: "standard",
  },
];
