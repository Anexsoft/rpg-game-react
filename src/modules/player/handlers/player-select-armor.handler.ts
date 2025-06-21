import { Player } from "@player/types/index.types";

import type { ArmorId } from "@armor/types/ids.types";

export class PlayerSelectArmorHandler {
  static handle(player: Player, armorId: ArmorId): Player {
    return {
      ...player,
      selectedArmor: armorId,
    };
  }
}
