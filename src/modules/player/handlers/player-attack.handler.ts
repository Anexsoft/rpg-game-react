import type { Player } from "@player/types/index.types";

import type { Enemy } from "@enemy/types/index.type";

import { PlayerCalculateDamageHandler } from "./player-calculate-damage.handler";
import { PlayerGetWeaponTargets } from "./player-get-weapon-targets.handler";

export class PlayerAttackHandler {
  static handle(player: Player, enemies: Enemy[]) {
    const _enemies = [...enemies];
    const targets = PlayerGetWeaponTargets.handle(player, enemies);

    for (const enemy of targets) {
      const { amount, isCritical } = PlayerCalculateDamageHandler.handle(
        player,
        enemy.res
      );

      enemy.takeDamage(amount, isCritical);
    }

    return _enemies;
  }
}
