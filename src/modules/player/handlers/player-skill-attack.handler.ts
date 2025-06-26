import type { Player } from "@player/types/index.types";

import { SkillGetByIdHandler } from "@skills/handlers/skill-get-by-id.handler";
import type { Skill } from "@skills/types/index.type";

import type { Enemy } from "@enemy/types/index.type";

import { PlayerCalculateDamageHandler } from "./player-calculate-damage.handler";
import { PlayerGetWeaponTargets } from "./player-get-weapon-targets.handler";
import { PlayerReduceStaminaHandler } from "./player-reduce-stamina.handler";

type PlayerSkillAttackHandlerResponse = {
  updatedPlayer: Player;
  updatedEnemies: Enemy[];
};

export class PlayerSkillAttackHandler {
  static handle(
    player: Player,
    enemies: Enemy[]
  ): PlayerSkillAttackHandlerResponse {
    if (!player.selectedSkill) {
      throw new Error("Player does not have selected skill");
    }

    const skill = SkillGetByIdHandler.handle(player.selectedSkill);

    if (skill.cost > player.sta) {
      throw new Error("Not enough stamina to use the skill");
    }

    if (skill.behavior !== "attack") {
      throw new Error("Invalid skill supplied");
    }

    const targets = PlayerGetWeaponTargets.handle(player, enemies);

    this.applySkillDamageToTargets(player, targets, skill);
    const updatedPlayer = PlayerReduceStaminaHandler.handle(player, skill.cost);

    return {
      updatedPlayer,
      updatedEnemies: enemies,
    };
  }

  private static applySkillDamageToTargets(
    player: Player,
    targets: Enemy[],
    skill: Skill
  ) {
    for (const target of targets) {
      const { amount, isCritical } = PlayerCalculateDamageHandler.handle(
        player,
        target.res
      );

      if (skill.id === "precision-shot") {
        target.takeDamage(amount, isCritical);

        target.curseEffect = {
          type: "bleeding",
          turns: skill.effect.duration,
          damage: Math.round(skill.effect.penaltyHpRate * amount),
        };
      }

      if (skill.id === "double-shot") {
        const damage = amount + amount * skill.effect.hits;
        target.takeDamage(damage, isCritical);
      }
    }
  }
}
