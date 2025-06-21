import { ENEMIES } from "..";
import {
  ENEMY_MAX_EVA,
  ENEMY_MAX_CTR,
  ENEMY_STAT_FACTOR_PER_LEVEL,
} from "../stats-progress";
import type { EnemyId } from "../types/ids.type";
import { Enemy } from "../types/index.type";

export class EnemyCreateHandler {
  static handle(id: EnemyId): Enemy {
    const baseEnemy = ENEMIES.find(({ id: enemyId }) => enemyId === id);

    if (!baseEnemy) {
      throw new Error(`Invalid enemy id "${id}" has been supplied`);
    }

    const level = this.pickValue(baseEnemy.level);

    const maxHp = this.scaleValue(baseEnemy.hp, level, true);
    const dmg = this.scaleValue(baseEnemy.dmg, level, true);
    const eva = Math.min(this.scaleValue(baseEnemy.eva, level), ENEMY_MAX_EVA);
    const ctr = Math.min(this.scaleValue(baseEnemy.ctr, level), ENEMY_MAX_CTR);
    const expGiven = this.scaleValue(this.pickValue(baseEnemy.expGiven), level);
    const goldGiven = this.scaleValue(
      this.pickValue(baseEnemy.goldGiven),
      level,
    );

    const power = this.calculatePowerScore({ maxHp, dmg, eva, ctr });

    return new Enemy(baseEnemy.name, power, {
      level,
      maxHp,
      dmg,
      eva,
      ctr,
      expGiven,
      goldGiven,
      avatar: baseEnemy.picture,
    });
  }

  private static pickValue(range: number[]): number {
    const [min, max] = range;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private static scaleValue(
    baseValue: number,
    level: number,
    rounded = false,
  ): number {
    if (level <= 1) return baseValue;

    const factor = 1 + (level - 1) * ENEMY_STAT_FACTOR_PER_LEVEL;

    if (!rounded) {
      return parseFloat((baseValue * factor).toFixed(4));
    }

    return Math.round(baseValue * factor);
  }

  private static calculatePowerScore({
    maxHp,
    dmg,
    eva,
    ctr,
  }: {
    maxHp: number;
    dmg: number;
    eva: number;
    ctr: number;
  }): number {
    return Math.round(maxHp * 0.4 + dmg * 3 + eva * 1.5 + ctr * 2);
  }
}
