import bodyGuard from "@resources/images/armor/body-guard.png";
import leatherJacket from "@resources/images/armor/leather-jacket.png";

import type { ArmorId } from "./types/ids.types";
import type { Armor } from "./types/index.type";

function createArmorVariation(id: ArmorId, base: Armor, level: number): Armor {
  return {
    ...base,
    id,
    name: `${base.name}+${level}`,
    def: parseFloat((base.def + 0.02 * level).toFixed(2)),
  };
}

const BASE_LEATHER_JACKET: Armor = {
  id: "leather-jacket",
  name: "Leather Jacket",
  description: "A rugged jacket offering minimal protection and good mobility.",
  picture: leatherJacket,
  rarity: "standard",
  def: 0.05,
};

const BASE_BODY_GUARD_VEST: Armor = {
  id: "body-guard-vest",
  name: "Body Guard Vest",
  description:
    "A reinforced vest with decent protection against basic attacks.",
  picture: bodyGuard,
  rarity: "standard",
  def: 0.1,
};

export const ARMORS: Armor[] = [
  BASE_LEATHER_JACKET,
  createArmorVariation("leather-jacket+1", BASE_LEATHER_JACKET, 1),
  createArmorVariation("leather-jacket+2", BASE_LEATHER_JACKET, 2),
  createArmorVariation("leather-jacket+3", BASE_LEATHER_JACKET, 3),

  BASE_BODY_GUARD_VEST,
  createArmorVariation("body-guard-vest+1", BASE_BODY_GUARD_VEST, 1),
  createArmorVariation("body-guard-vest+2", BASE_BODY_GUARD_VEST, 2),
  createArmorVariation("body-guard-vest+3", BASE_BODY_GUARD_VEST, 3),
];

console.info(ARMORS);
