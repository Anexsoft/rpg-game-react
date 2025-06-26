import type { Player } from "@player/types/index.types";

import type { WeaponId } from "@weapons/types/ids.type";

import type { ArmorId } from "@armor/types/ids.types";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";
import { DEFAULT_SELL_PRICE_REDUCTION_RATE } from "@src/modules/items/shared";

export type PlayerSellItemHandlerResponse =
  | {
      status: "success";
      player: Player;
    }
  | {
      status: "cannot-sell-equipped";
      player: null;
    };

export class PlayerSellItemHandler {
  static handle(player: Player, itemId: string): PlayerSellItemHandlerResponse {
    const item = ItemGetByIdHandler.handle(itemId);
    const playerItem = player.inventory.find((inv) => inv.id === itemId);

    if (!playerItem) {
      throw new Error(`Item ${itemId} not found in player's inventory`);
    }

    const restriction = this.hasRestrictions(
      player,
      itemId,
      playerItem.quantity
    );

    if (restriction) {
      return restriction;
    }

    const sellPrice = Math.floor(
      item.price * DEFAULT_SELL_PRICE_REDUCTION_RATE
    );

    const updatedInventory =
      playerItem.quantity > 1
        ? player.inventory.map((inv) =>
            inv.id === itemId ? { ...inv, quantity: inv.quantity - 1 } : inv
          )
        : player.inventory.filter((inv) => inv.id !== itemId);

    const updatedPlayer: Player = {
      ...player,
      gold: player.gold + sellPrice,
      inventory: updatedInventory,
    };

    return {
      status: "success",
      player: updatedPlayer,
    };
  }

  private static hasRestrictions(
    player: Player,
    itemId: string,
    quantity: number
  ): PlayerSellItemHandlerResponse | null {
    const isEquipped =
      quantity === 1 &&
      [player.selectedWeapon, player.selectedArmor].includes(
        itemId as WeaponId | ArmorId
      );

    if (isEquipped) {
      return {
        status: "cannot-sell-equipped",
        player: null,
      };
    }

    return null;
  }
}
