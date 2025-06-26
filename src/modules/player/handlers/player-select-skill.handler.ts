import { Player } from "@player/types/index.types";

import type { SkillId } from "@skills/types/ids.type";

export class PlayerSelectSkillHandler {
  static handle(player: Player, skillId: SkillId): Player {
    return {
      ...player,
      selectedSkill: skillId,
    };
  }
}
