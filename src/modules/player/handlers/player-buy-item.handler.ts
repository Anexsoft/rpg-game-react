import type { Player } from "@player/types/index.types";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

export type PlayerBuyItemHandlerResponse =
  | {
      status: "success";
      player: Player;
    }
  | {
      status: "not-enough-gold";
      player: null;
    };

export class PlayerBuyItemHandler {
  static handle(player: Player, itemId: string): PlayerBuyItemHandlerResponse {
    const item = ItemGetByIdHandler.handle(itemId);

    if (player.gold < item.price) {
      return {
        status: "not-enough-gold",
        player: null,
      };
    }

    const existingItem = player.inventory.find((inv) => inv.id === itemId);

    const updatedInventory = existingItem
      ? player.inventory.map((inv) =>
          inv.id === itemId ? { ...inv, quantity: inv.quantity + 1 } : inv,
        )
      : [...player.inventory, { id: item.id, quantity: 1 }];

    const updatedPlayer: Player = {
      ...player,
      gold: player.gold - item.price,
      inventory: updatedInventory,
    };

    return {
      status: "success",
      player: updatedPlayer,
    };
  }
}
