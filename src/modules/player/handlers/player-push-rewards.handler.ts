import { Player } from "@player/types/index.types";

import type { ItemReward } from "@src/modules/items/types/index.type";

export class PlayerPushRewardsHandler {
  static handle(player: Player, rewards: ItemReward[]): Player {
    const { inventory } = player;

    for (const reward of rewards) {
      const item = inventory.find((inv) => inv.id === reward.id);

      if (item) {
        item.quantity++;
      } else {
        inventory.push({
          id: reward.id,
          quantity: 1,
        });
      }
    }

    return {
      ...player,
      inventory,
    };
  }
}
