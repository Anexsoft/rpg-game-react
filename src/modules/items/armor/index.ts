import bodyGuard from "@resources/images/armor/body-guard.png";
import leatherJacket from "@resources/images/armor/leather-jacket.png";

import type { Armor } from "./types/index.type";

export const ARMORS: Armor[] = [
  {
    id: "leather-jacket",
    name: "Leather Jacket",
    description:
      "A rugged jacket offering minimal protection and good mobility.",
    picture: leatherJacket,
    rarity: "standard",
    def: 0.05,
  },
  {
    id: "body-guard-vest",
    name: "Body Guard Vest",
    description:
      "A reinforced vest with decent protection against basic attacks.",
    picture: bodyGuard,
    rarity: "standard",
    def: 0.15,
  },
];
