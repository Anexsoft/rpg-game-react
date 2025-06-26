import desertEagleEpic from "@resources/images/weapons/desert-eagle-epic.png";
import desertEagleRare from "@resources/images/weapons/desert-eagle-rare.png";
import desertEagleStandard from "@resources/images/weapons/desert-eagle-standard.png";
import handgun9mmPicEpic from "@resources/images/weapons/handgun-9mm-epic.png";
import handgun9mmPicRare from "@resources/images/weapons/handgun-9mm-rare.png";
import handgun9mmPicStandard from "@resources/images/weapons/handgun-9mm-standard.png";
import mp5Epic from "@resources/images/weapons/mp5-epic.png";
import mp5Rare from "@resources/images/weapons/mp5-rare.png";
import mp5Standard from "@resources/images/weapons/mp5-standard.png";
import shotgunRemingtonEpic from "@resources/images/weapons/shotgun-remington-epic.png";
import shotgunRemingtonRare from "@resources/images/weapons/shotgun-remington-rare.png";
import shotgunRemingtonStandard from "@resources/images/weapons/shotgun-remington-standard.png";
import spas12Epic from "@resources/images/weapons/spas12-epic.png";
import spas12Rare from "@resources/images/weapons/spas12-rare.png";
import spas12Standard from "@resources/images/weapons/spas12-standard.png";
import uziEpic from "@resources/images/weapons/uzi-epic.png";
import uziRare from "@resources/images/weapons/uzi-rare.png";
import uziStandard from "@resources/images/weapons/uzi-standard.png";

import type { ItemRarity } from "../types/index.type";

import type { WeaponId } from "./types/ids.type";
import type { Weapon } from "./types/index.type";

function createVariation(
  id: WeaponId,
  {
    base,
    picture,
    rarity,
  }: { base: Weapon; picture?: string; rarity?: ItemRarity },
  level: number
): Weapon {
  return {
    level,
    id,
    name: `${base.name}+${level}`,
    rarity: rarity ?? base.rarity,
    picture: picture ?? base.picture,
    dmg: Math.round(base.dmg * (1 + 0.25 * level)),
    target: base.target,
    type: base.type,
    description: base.description,
    price: Math.round(base.price * (1 + 0.25 * level)),
  };
}

// Base weapons
const BASE_HANDGUN: Weapon = {
  level: 0,
  id: "9mm-semi-automatic-handgun",
  type: "handgun",
  name: "9mm Semi-Automatic Handgun",
  description: "Reliable sidearm for close to mid-range.",
  picture: handgun9mmPicStandard,
  rarity: "standard",
  dmg: 10,
  target: {
    type: "single",
    targets: 1,
    dmgMultiplier: 1,
  },
  price: 250,
};

const BASE_DESERT_EAGLE: Weapon = {
  level: 0,
  id: "desert-eagle",
  type: "handgun",
  name: "Desert Eagle",
  description: "High caliber handgun with massive stopping power.",
  picture: desertEagleStandard,
  rarity: "standard",
  dmg: 18,
  target: {
    type: "single",
    targets: 1,
    dmgMultiplier: 1.35,
  },
  price: 1000,
};

const BASE_SHOTGUN: Weapon = {
  level: 0,
  id: "remington-870-pump-action-shotgun",
  type: "shotgun",
  name: "Remington 870 Pump-Action Shotgun",
  description: "Powerful shotgun, best at close range.",
  picture: shotgunRemingtonStandard,
  rarity: "standard",
  dmg: 10,
  target: {
    type: "multiple",
    targets: 3,
    dmgMultiplier: 0.65,
  },
  price: 600,
};

const BASE_SPAS12: Weapon = {
  level: 0,
  id: "spas-12",
  type: "shotgun",
  name: "SPAS-12 Shotgun",
  description: "Semi-auto shotgun for heavy impact.",
  picture: spas12Standard,
  rarity: "standard",
  dmg: 15,
  target: {
    type: "multiple",
    targets: 4,
    dmgMultiplier: 0.7,
  },
  price: 800,
};

const BASE_UZI: Weapon = {
  level: 0,
  id: "uzi",
  type: "smg",
  name: "Uzi",
  description: "Compact SMG with rapid fire.",
  picture: uziStandard,
  rarity: "standard",
  dmg: 11,
  target: {
    type: "random",
    targets: 3,
    dmgMultiplier: 0.6,
  },
  price: 400,
};

const BASE_MP5: Weapon = {
  level: 0,
  id: "mp5",
  type: "smg",
  name: "MP5",
  description: "Versatile SMG with high accuracy.",
  picture: mp5Standard,
  rarity: "standard",
  dmg: 14,
  target: {
    type: "multiple",
    targets: 4,
    dmgMultiplier: 0.7,
  },
  price: 600,
};

export const WEAPONS: Weapon[] = [
  ...[
    BASE_HANDGUN,
    BASE_DESERT_EAGLE,
    BASE_SHOTGUN,
    BASE_SPAS12,
    BASE_UZI,
    BASE_MP5,
  ].flatMap((base) => {
    return [0, 1, 2, 3, 4, 5].map((lvl) => {
      const rarities = [
        "standard",
        "standard",
        "standard",
        "rare",
        "rare",
        "epic",
      ];
      const pics = {
        "9mm-semi-automatic-handgun": [
          handgun9mmPicStandard,
          handgun9mmPicRare,
          handgun9mmPicEpic,
        ],
        "desert-eagle": [desertEagleStandard, desertEagleRare, desertEagleEpic],
        "remington-870-pump-action-shotgun": [
          shotgunRemingtonStandard,
          shotgunRemingtonRare,
          shotgunRemingtonEpic,
        ],
        "spas-12": [spas12Standard, spas12Rare, spas12Epic],
        uzi: [uziStandard, uziRare, uziEpic],
        mp5: [mp5Standard, mp5Rare, mp5Epic],
      };

      if (lvl === 0) return base;

      const rarity = rarities[lvl];
      const imgSet = pics[base.id as keyof typeof pics];
      const pic = lvl < 3 ? imgSet[0] : lvl < 5 ? imgSet[1] : imgSet[2];

      return createVariation(
        `${base.id}+${lvl}` as WeaponId,
        { base, rarity: rarity as ItemRarity, picture: pic },
        lvl
      );
    });
  }),
];
