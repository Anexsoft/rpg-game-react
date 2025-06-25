import type { Player } from "@player/types/index.types";

import type { ConsumableId } from "@consumables/types/ids.types";
import type { Consumable } from "@consumables/types/index.type";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

export class PlayerUseConsumableHandler {
  static handle(player: Player, itemId: ConsumableId): Player {
    const item = ItemGetByIdHandler.handle<Consumable>(itemId);

    const healedAmount = Math.floor(player.maxHp * item.restoreRate);

    const newHp = Math.min(player.hp + healedAmount, player.maxHp);

    const updatedInventory = player.inventory
      .map((invItem) => {
        if (invItem.type === "consumable" && invItem.id === itemId) {
          return { ...invItem, quantity: invItem.quantity - 1 };
        }

        return invItem;
      })
      .filter((invItem) => invItem.quantity > 0);

    return {
      ...player,
      hp: newHp,
      inventory: updatedInventory,
    };
  }
}
