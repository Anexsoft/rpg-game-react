import type { Player } from "@player/types/index.types";

import { SkillGetByIdHandler } from "@skills/handlers/skill-get-by-id.handler";
import type { SkillId } from "@skills/types/ids.type";

export type PlayerBuySkillHandlerResponse =
  | {
      status: "success";
      player: Player;
    }
  | {
      status: "not-enough-gold" | "already-owned";
      player: null;
    };

export class PlayerBuySkillHandler {
  static handle(
    player: Player,
    skillId: SkillId,
  ): PlayerBuySkillHandlerResponse {
    const skill = SkillGetByIdHandler.handle(skillId);

    const validation = this.validate(player, skillId, skill.price);
    if (validation) {
      return validation;
    }

    const updatedPlayer: Player = {
      ...player,
      gold: player.gold - skill.price,
      skills: [...player.skills, skillId],
    };

    if (!updatedPlayer.selectedSkill) {
      updatedPlayer.selectedSkill = skillId;
    }

    return {
      status: "success",
      player: updatedPlayer,
    };
  }

  private static validate(
    player: Player,
    skillId: SkillId,
    price: number,
  ): PlayerBuySkillHandlerResponse | null {
    if (player.skills.includes(skillId)) {
      return {
        status: "already-owned",
        player: null,
      };
    }

    if (player.gold < price) {
      return {
        status: "not-enough-gold",
        player: null,
      };
    }

    return null;
  }
}
