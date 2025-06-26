import {
  DEFAULT_SELECTED_ARMOR,
  DEFAULT_SELECTED_WEAPON,
} from "@player/inventory";
import { LEVELS } from "@player/levels";
import { LEVEL_RANKS } from "@player/ranks";
import { DEX, INT, LUK, STR, VIT } from "@player/stats";

import type { WeaponId } from "@weapons/types/ids.type";

import type { ArmorId } from "@armor/types/ids.types";

import type { ConsumableId } from "@src/modules/items/consumables/types/ids.types";
import type { SkillId } from "@src/modules/skills/types/ids.type";

export type PlayerInventoryItem = {
  id: WeaponId | ArmorId | ConsumableId;
  quantity: number;
};

export type PlayerGender = "male" | "female";

export class Player {
  /** Player's Id */
  id: string;

  /** Player's name */
  name: string;

  /** Player's Rank */
  rank: string = LEVEL_RANKS[0].name;

  /** Player's gender */
  gender: PlayerGender;

  /** Strength – affects physical damage. Higher strength means more power. */
  str: number = STR;

  /** Vitality – affects HP. The higher the value, the more life the Player has. */
  vit: number = VIT;

  /** Energy – determines stamina capacity and recovery rate. */
  nrg: number = INT;

  /** Dexterity – affects evasion. Higher dex increases the chance to dodge attacks. */
  dex: number = DEX;

  /** Luck – affects critical rate. More luck increases critical hit chance. */
  luk: number = LUK;

  /** Player level – used to scale base stats over time. Starts at 1. */
  level: number = 1;

  /** Current experience – used to determine level progression. Starts at 0. */
  exp: number = 0;

  /** Experience required to reach the next level. Starts at 0. */
  expToNextLevel: number = LEVELS[1][1];

  /** Gold – Player's currency. Starts at 0. */
  gold: number = 100;

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

  /** Physical damage rate – calculated from strength (STR). */
  dmg: number = 0;

  inventory: PlayerInventoryItem[] = [];
  skills: SkillId[] = [];

  selectedWeapon: WeaponId = DEFAULT_SELECTED_WEAPON;
  selectedArmor: ArmorId = DEFAULT_SELECTED_ARMOR;
  selectedSkill: SkillId | null = null;

  availableStatPoints: number = 0;

  /**  Number of battles the player has won */
  victories: number = 0;

  /**  Number of battles the player has lost */
  defeats: number = 0;

  constructor(name: string, gender: PlayerGender) {
    this.id = `${Math.random().toString(36).slice(2, 8)}`;
    this.name = name;
    this.gender = gender;

    this.inventory.push(
      {
        id: this.selectedWeapon,
        quantity: 1,
      },
      {
        id: this.selectedArmor,
        quantity: 1,
      },
      {
        id: "health-shot",
        quantity: 5,
      }
    );
  }
}
