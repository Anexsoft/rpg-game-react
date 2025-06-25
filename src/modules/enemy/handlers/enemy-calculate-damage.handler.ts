import type { Enemy } from "@enemy/types/index.type";

export type EnemyCalculateDamageHandlerResponse = {
  amount: number;
  isCritical: boolean;
};

export class EnemyCalculateDamageHandler {
  static handle(
    enemy: Enemy,
    playerResistance: number,
  ): EnemyCalculateDamageHandlerResponse {
    const isCritical = Math.random() < enemy.ctr;
    const baseDamage = enemy.dmg;
    const criticaldmgMultiplier = 1.5;

    const rawDamage = isCritical
      ? baseDamage * criticaldmgMultiplier
      : baseDamage;
    const reducedDamage = Math.max(
      Math.floor(rawDamage * (1 - playerResistance)),
      1,
    );

    return {
      amount: reducedDamage,
      isCritical,
    };
  }
}
