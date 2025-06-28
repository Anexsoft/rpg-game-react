import type { Player } from "@player/types/index.types";

import { SkillGetByIdHandler } from "@skills/handlers/skill-get-by-id.handler";
import type { Skill } from "@skills/types/index.type";

import type { Enemy } from "@enemy/types/index.type";

import { PlayerReduceStaminaHandler } from "./player-reduce-stamina.handler";

type PlayerSkillEffectHandlerResponse = {
  updatedPlayer: Player;
  updatedEnemies: Enemy[];
};

export class PlayerSkillEffectHandler {
  static handle(
    player: Player,
    enemies: Enemy[],
  ): PlayerSkillEffectHandlerResponse {
    if (!player.selectedSkill) {
      throw new Error("Player does not have selected skill");
    }

    const skill = SkillGetByIdHandler.handle(player.selectedSkill);

    if (skill.cost > player.sta) {
      throw new Error("Not enough stamina to use the skill");
    }

    if (skill.behavior !== "effect") {
      throw new Error("Invalid skill supplied");
    }

    const updatedEnemies = this.applySkillEffect([...enemies], skill);
    const updatedPlayer = PlayerReduceStaminaHandler.handle(player, skill.cost);

    return {
      updatedPlayer,
      updatedEnemies,
    };
  }

  private static applySkillEffect(targets: Enemy[], skill: Skill): Enemy[] {
    if (skill.id === "blind-light") {
      for (const target of targets.filter((t) => t.isAlive)) {
        target.curseEffect = {
          turns: skill.effect.duration,
          type: "blind",
        };
      }
    }

    return targets;
  }
}
