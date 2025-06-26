import type { Player } from "@player/types/index.types";

import type { ConsumableId } from "@consumables/types/ids.types";
import type { Consumable } from "@consumables/types/index.type";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

export class PlayerUseConsumableHandler {
  static handle(player: Player, itemId: ConsumableId): Player {
    const item = ItemGetByIdHandler.handle<Consumable>(itemId);

    if (item.type === "healing") {
      this.applyHealing(player, item);
    }

    if (item.type === "stamina") {
      this.applyStamina(player, item);
    }

    return {
      ...player,
      inventory: this.consumeItem(player, itemId),
    };
  }

  private static applyHealing(player: Player, item: Consumable): void {
    const healedAmount = Math.floor(player.maxHp * item.restoreRate);
    player.hp = Math.min(player.hp + healedAmount, player.maxHp);
  }

  private static applyStamina(player: Player, item: Consumable): void {
    const restoredAmount = Math.floor(player.maxSta * item.restoreRate);
    player.sta = Math.min(player.sta + restoredAmount, player.maxSta);
  }

  private static consumeItem(player: Player, itemId: ConsumableId) {
    return player.inventory
      .map((invItem) =>
        invItem.id === itemId
          ? { ...invItem, quantity: invItem.quantity - 1 }
          : invItem
      )
      .filter((invItem) => invItem.quantity > 0);
  }
}
