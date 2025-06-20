import {
  DEFAULT_SELECTED_AID,
  DEFAULT_SELECTED_ARMOR,
  DEFAULT_SELECTED_WEAPON,
} from "@player/defs/inventory";
import { LEVELS } from "@player/defs/levels";
import { LEVEL_RANKS } from "@player/defs/ranks";
import { DEX, INT, LUK, STR, VIT } from "@player/defs/stats";

import type { WeaponId } from "@weapons/types/ids.types";

import type { ArmorId } from "@armor/types/ids.types";

import type { AidId } from "@aid/types/ids.types";

type TypeMap = {
  weapon: WeaponId;
  armor: ArmorId;
  aid: AidId;
};

type PlayerInventoryItem = {
  [K in keyof TypeMap]: {
    type: K;
    id: TypeMap[K];
    quantity: number;
  };
}[keyof TypeMap];

export class Player {
  /** characterId ObjectId */
  id: string;

  /** Character's name */
  name: string;

  /** Character's Rank */
  rank: string = LEVEL_RANKS[0].name;

  /** Strength – affects physical damage. Higher strength means more power. */
  str: number = STR;

  /** Vitality – affects HP. The higher the value, the more life the character has. */
  vit: number = VIT;

  /** Energy – determines stamina capacity and recovery rate. */
  nrg: number = INT;

  /** Dexterity – affects evasion. Higher dex increases the chance to dodge attacks. */
  dex: number = DEX;

  /** Luck – affects critical rate. More luck increases critical hit chance. */
  luk: number = LUK;

  /** Character level – used to scale base stats over time. Starts at 1. */
  level: number = 1;

  /** Current experience – used to determine level progression. Starts at 0. */
  exp: number = 0;

  /** Experience required to reach the next level. Starts at 0. */
  expToNextLevel: number = LEVELS[0][1];

  /** Gold – character's currency. Starts at 0. */
  gold: number = 0;

  /** Current HP – actual life points. Can be reduced or restored during gameplay. */
  hp: number = 0;

  /** Current Stamina – actual stamina points. Used for physical actions like running or dodging. */
  sta: number = 0;

  /** Max HP – calculated from vitality and level. Used to limit current HP. */
  maxHp: number = 0;

  /** Max Stamina – calculated from NRG and level. Used to limit current stamina. */
  maxSta: number = 0;

  /** Evasion rate – chance to dodge an attack, based on dexterity (as a proportion). */
  eva: number = 0;

  /** Critical rate – chance to land a critical hit, based on luck (as a proportion). */
  ctr: number = 0;

  /** Resistance rate – resistance bonus gained per level */
  res: number = 0;

  /** Physical damage – calculated from strength (STR). */
  dmg: number = 0;

  inventory: PlayerInventoryItem[] = [];

  selectedWeapon: WeaponId = DEFAULT_SELECTED_WEAPON;
  selectedArmor: ArmorId = DEFAULT_SELECTED_ARMOR;

  constructor(name: string) {
    this.id = `${Math.random().toString(36).slice(2, 8)}`;
    this.name = name;

    this.inventory.push(
      {
        type: "weapon",
        id: this.selectedWeapon,
        quantity: 1,
      },
      {
        type: "weapon",
        id: "remington-870-pump-action-shotgun",
        quantity: 1,
      },
      {
        type: "armor",
        id: this.selectedArmor,
        quantity: 1,
      },
      {
        type: "armor",
        id: "leather-jacket",
        quantity: 1,
      },
      {
        type: "aid",
        id: DEFAULT_SELECTED_AID,
        quantity: 3,
      },
    );
  }
}
