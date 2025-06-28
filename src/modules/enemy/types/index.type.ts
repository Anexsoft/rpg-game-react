import { PlayerReceiveDamageHandler } from "@player/handlers/player-receive-damage.handler";
import type { Player } from "@player/types/index.types";

import { EnemyCalculateDamageHandler } from "@enemy/handlers/enemy-calculate-damage.handler";

import { ARMORS } from "@armor/index";

export type EnemyReward = {
  exp: number;
  gold: number;
};

export type EnemyActionStatus = {
  type: "attack" | "attacked" | "missed";
  amount: number;
  wasCritical: boolean;
};

export type EnemyCurseEffect =
  | { turns: number; type: "blind" }
  | { turns: number; type: "bleeding"; damage: number };

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

  /** Curse Effect **/
  curseEffect: EnemyCurseEffect | null = null;

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
  takeDamage(damage: number, isCritical: boolean): void {
    this.hp = Math.max(0, this.hp - damage);

    this.actionStatus = {
      type: "attacked",
      amount: damage,
      wasCritical: isCritical,
    };
  }

  /** Update attacking information */
  attack(target: Player): void {
    if (this.updateCurseEffect() === "skip") {
      return;
    }

    if (!this.isAlive) {
      return;
    }

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

    const isEvaded = Math.random() <= target.eva;

    this.actionStatus = {
      type: isEvaded ? "missed" : "attack",
      amount,
      wasCritical: isCritical,
    };

    if (isEvaded) {
      return;
    }

    const { hp } = PlayerReceiveDamageHandler.handle(target, amount);
    target.hp = hp;
  }

  /** Applies the curse effect and returns whether the entity can act this turn */
  private updateCurseEffect(): "continue" | "skip" {
    const curse = this.curseEffect;

    let result: "continue" | "skip" = "continue";

    if (!curse) {
      return result;
    }

    // Skip effect logic if already dead (handled externally)
    if (!this.isAlive) {
      this.curseEffect = null;
      return "continue";
    }

    switch (curse.type) {
      case "bleeding": {
        this.hp = Math.max(0, this.hp - curse.damage);
        break;
      }

      case "blind":
        result = "skip";
        break;
    }

    curse.turns--;

    if (curse.turns <= 0) {
      this.curseEffect = null;
    }

    return result;
  }

  /** Returns the reward after defeat (for now: only experience) */
  get rewards(): EnemyReward {
    return { exp: this.expGiven, gold: this.goldGiven };
  }
}
