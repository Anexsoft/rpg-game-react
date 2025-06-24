import type { UpgradableStats } from "@ui/types/stats.type";

import type { Player } from "@player/types/index.types";

export class PlayerUpgradeStatHandler {
  static handle(player: Player, stat: UpgradableStats): Player {
    if (player.availableStatPoints <= 0) {
      throw new Error("No available stat points.");
    }

    return {
      ...player,
      availableStatPoints: player.availableStatPoints - 1,
      [stat]: player[stat] + 1,
    };
  }
}
