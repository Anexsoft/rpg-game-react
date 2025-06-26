import type { Player } from "@player/types/index.types";

import { SkillGetByIdHandler } from "@skills/handlers/skill-get-by-id.handler";

import type { Enemy } from "@enemy/types/index.type";

import { PlayerCalculateDamageHandler } from "./player-calculate-damage.handler";

export class PlayerSkillAttackHandler {
  static handle(player: Player, enemies: Enemy[]) {
    if (!player.selectedSkill) {
      throw new Error("Player does not have selected skill");
    }

    const skill = SkillGetByIdHandler.handle(player.selectedSkill);

    if (skill.behavior !== "attack") {
      throw new Error("Invalid skill supplied");
    }

    const _enemies = [...enemies];

    for (const enemy of _enemies) {
      const { amount, isCritical } = PlayerCalculateDamageHandler.handle(
        player,
        enemy.res
      );

      if (skill.id === "precision-shot") {
        const damage = amount * skill.effect.multiplier;
        enemy.takeDamage(damage, isCritical);
      }

      if (skill.id === "double-shot") {
        const damage =
          amount + amount * skill.effect.hits * skill.effect.penalty;
        enemy.takeDamage(damage, isCritical);
      }
    }

    return _enemies;
  }
}
