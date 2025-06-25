import advancedArmorEpic from "@resources/images/armor/advanced-armor-epic.png";
import advancedArmorRare from "@resources/images/armor/advanced-armor-rare.png";
import advancedArmorStandard from "@resources/images/armor/advanced-armor-standard.png";
import bodyGuardEpic from "@resources/images/armor/body-guard-epic.png";
import bodyGuardRare from "@resources/images/armor/body-guard-rare.png";
import bodyGuardStandard from "@resources/images/armor/body-guard-standard.png";
import leatherJacketEpic from "@resources/images/armor/leather-jacket-epic.png";
import leatherJacketRare from "@resources/images/armor/leather-jacket-rare.png";
import leatherJacketStandard from "@resources/images/armor/leather-jacket-standard.png";

import type { ItemRarity } from "../types/index.type";

import type { ArmorId } from "./types/ids.types";
import type { Armor } from "./types/index.type";

function createArmorVariation(
  id: ArmorId,
  {
    base,
    picture,
    rarity,
  }: { base: Armor; picture?: string; rarity?: ItemRarity },
  level: number
): Armor {
  return {
    ...base,
    id,
    name: `${base.name}+${level}`,
    rarity: rarity ?? base.rarity,
    picture: picture ?? base.picture,
    def: parseFloat((base.def + 0.02 * level).toFixed(2)),
  };
}

const BASES: Record<string, Armor> = {
  "leather-jacket": {
    id: "leather-jacket",
    name: "Leather Jacket",
    description:
      "A rugged jacket offering minimal protection and good mobility.",
    picture: leatherJacketStandard,
    rarity: "standard",
    def: 0.07,
  },
  "body-guard-vest": {
    id: "body-guard-vest",
    name: "Body Guard Vest",
    description:
      "A reinforced vest with decent protection against basic attacks.",
    picture: bodyGuardStandard,
    rarity: "standard",
    def: 0.1,
  },
  "advanced-armor": {
    id: "advanced-armor",
    name: "Advanced Armor",
    description: "High-tech armor offering maximum protection.",
    picture: advancedArmorStandard,
    rarity: "standard",
    def: 0.15,
  },
};

const pictures: Record<string, string[]> = {
  "leather-jacket": [
    leatherJacketStandard,
    leatherJacketRare,
    leatherJacketEpic,
  ],
  "body-guard-vest": [bodyGuardStandard, bodyGuardRare, bodyGuardEpic],
  "advanced-armor": [
    advancedArmorStandard,
    advancedArmorRare,
    advancedArmorEpic,
  ],
};

const rarities: ItemRarity[] = ["standard", "rare", "epic"];

export const ARMORS: Armor[] = Object.entries(BASES).flatMap(([key, base]) => {
  return [0, 1, 2, 3].map((lvl) => {
    if (lvl === 0) return base;
    const pictureSet = pictures[key];
    const rarity = rarities[Math.min(lvl - 1, 2)];
    const picture = pictureSet[Math.min(lvl - 1, 2)];
    return createArmorVariation(
      `${key}+${lvl}` as ArmorId,
      { base, picture, rarity },
      lvl
    );
  });
});
