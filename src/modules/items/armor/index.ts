import bodyGuard from "@resources/images/armor/body-guard.png";
import leatherJacket from "@resources/images/armor/leather-jacket.png";

import type { Armor } from "./types/index.type";

export const ARMORS: Armor[] = [
  {
    name: "9mm Semi-Automatic Handgun",
    description:
      "A reliable sidearm with moderate accuracy and quick reload. Ideal for close to mid-range encounters.",
    picture: leatherJacket,
    rarity: "standard",
  },
  {
    name: "Remington 870 Pump-Action Shotgun",
    description:
      "A powerful pump-action shotgun, effective at close range with high stopping power and wide spread.",
    picture: bodyGuard,
    rarity: "standard",
  },
];
