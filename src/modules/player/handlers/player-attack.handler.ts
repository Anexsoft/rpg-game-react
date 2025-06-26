import type { Player } from "@player/types/index.types";

import type { Enemy } from "@enemy/types/index.type";

import type { Weapon } from "@weapons/types/index.type";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

import {
  PlayerCalculateDamageHandler,
  type WeaponTarget,
} from "./player-calculate-damage.handler";

export class PlayerAttackHandler {
  static handle(player: Player, enemies: Enemy[]) {
    const _enemies = [...enemies];

    const weapon = ItemGetByIdHandler.handle<Weapon>(player.selectedWeapon);
    const targets = this.getEnemyTargets(_enemies, weapon.target);

    for (const enemy of targets) {
      const { amount, isCritical } = PlayerCalculateDamageHandler.handle(
        player,
        enemy.res
      );

      enemy.takeDamage(amount, isCritical);
    }

    return _enemies;
  }

  private static getEnemyTargets(enemies: Enemy[], target: WeaponTarget) {
    if (target.type === "single") {
      const target = enemies.find((enemy) => enemy.isAlive);
      return target ? [target] : [];
    }

    if (target.type === "multiple") {
      return enemies.filter((enemy) => enemy.isAlive).slice(0, target.targets);
    }

    if (target.type === "random") {
      const aliveEnemies = enemies.filter((enemy) => enemy.isAlive);

      const shuffled = [...aliveEnemies].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, target.targets);
    }

    return [];
  }
}
