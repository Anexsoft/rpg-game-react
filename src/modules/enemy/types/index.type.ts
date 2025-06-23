import { PlayerCalculateDamageHandler } from "@player/handlers/player-calculate-damage.handler";
import { PlayerReceiveDamageHandler } from "@player/handlers/player-receive-damage.handler";
import type { Player } from "@player/types/index.types";

import { EnemyCalculateDamageHandler } from "@enemy/handlers/enemy-calculate-damage.handler";

import { ARMORS } from "@armor/index";

export type EnemyReward = {
  exp: number;
  gold: number;
};

export type EnemyActionStatus = {
  type: "attacking" | "attacked";
  amount: number;
  wasCritical: boolean;
};

export class Enemy {
  id: string;

  /** Enemy's name */
  name: string;

  /** Hit Points */
  hp: number;

  /** Max Hit Points */
  maxHp: number;

  /** Damage output */
  dmg: number;

  /** Resistance chance (%) */
  res: number;

  /** Critical hit chance (%) */
  ctr: number;

  /** Experience points granted when defeated */
  expGiven: number;

  /** Gold granted when defeated */
  goldGiven: number;

  /** Enemy's level */
  level: number;

  /** Avatar's path */
  avatar: string;

  /** Points calculated base in its statues **/
  powerScore: number;

  /** Current Status information **/
  actionStatus: EnemyActionStatus | null = null;

  constructor(
    name: string,
    powerScore: number,
    options: {
      maxHp: number;
      dmg: number;
      res: number;
      ctr: number;
      expGiven: number;
      goldGiven: number;
      level: number;
      avatar: string;
    },
  ) {
    this.id = `${Math.random().toString(36).slice(2, 8)}`;
    this.name = name;
    this.powerScore = powerScore;

    this.maxHp = options.maxHp;
    this.hp = options.maxHp;
    this.dmg = options.dmg;
    this.res = options.res;
    this.ctr = options.ctr;
    this.expGiven = options.expGiven;
    this.goldGiven = options.goldGiven;
    this.level = options.level;
    this.avatar = options.avatar;
  }

  /** Returns true if the enemy is still alive */
  get isAlive(): boolean {
    return this.hp > 0;
  }

  /** Apply damage to the enemy */
  takeDamage(enemy: Player): void {
    const { amount, isCritical } = PlayerCalculateDamageHandler.handle(
      enemy,
      this.res,
    );

    this.hp = Math.max(0, this.hp - amount);

    this.actionStatus = {
      type: "attacked",
      amount,
      wasCritical: isCritical,
    };
  }

  /** Update attacking information */
  attack(target: Player): void {
    const targetArmor = ARMORS.find(
      (armor) => armor.id === target.selectedArmor,
    );

    if (!targetArmor) {
      throw new Error("Equipped armor could not be found");
    }

    const { amount, isCritical } = EnemyCalculateDamageHandler.handle(
      this,
      targetArmor.def,
    );

    this.actionStatus = {
      type: "attacking",
      amount,
      wasCritical: isCritical,
    };

    const { hp } = PlayerReceiveDamageHandler.handle(target, amount);
    target.hp = hp;
  }

  /** Returns the reward after defeat (for now: only experience) */
  get rewards(): EnemyReward {
    return { exp: this.expGiven, gold: this.goldGiven };
  }
}
