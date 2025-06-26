import { useEffect, useState } from "react";

import { useGame } from "@core/context/GameContext";

import Block from "@ui/Block";

import { PlayerUseConsumableHandler } from "@player/handlers/player-use-consumable.handler";

import { sortByTypeAndRestoreRate } from "@consumables/filters/index.filter";
import { CONSUMABLES } from "@consumables/index";
import type { ConsumableId } from "@consumables/types/ids.types";
import type { Consumable } from "@consumables/types/index.type";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

import { useCombat } from "../context/CombatContext";

export default function CombatPlayerConsumableItems() {
  const { player, setPlayer } = useGame();
  const { playerTurn } = useCombat();

  const [isEnabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(playerTurn === "player");
  }, [playerTurn]);

  const handleUseConsumable = (itemId: ConsumableId) => {
    if (!isEnabled) return;

    const updatedPlayer = PlayerUseConsumableHandler.handle(player, itemId);

    setPlayer(updatedPlayer);
    setEnabled(false);
  };

  const items = CONSUMABLES.sort(sortByTypeAndRestoreRate)
    .map((consumable) => {
      const inv = player.inventory.find((item) => item.id === consumable.id);
      return inv ? { ...consumable, quantity: inv.quantity } : null;
    })
    .filter(Boolean);

  return (
    <Block>
      {items.length === 0 ? (
        <p className="text-center text-gray-400 text-sm">No items available</p>
      ) : (
        <div className="grid grid-cols-5 gap-2">
          {items.map((item) => {
            const consumable = ItemGetByIdHandler.handle<Consumable>(item.id);

            return (
              <div
                key={item.id}
                onClick={() => handleUseConsumable(item.id as ConsumableId)}
                className={`relative flex flex-col items-center justify-center border border-gray-700 rounded transition-all ${
                  isEnabled
                    ? "hover:border-gray-400 cursor-pointer"
                    : "cursor-not-allowed grayscale"
                }`}
              >
                <img
                  src={consumable.picture}
                  alt={consumable.name}
                  className="w-24 object-contain mb-1"
                />
                <span className="absolute -bottom-1 -right-1 bg-black text-white text-xs px-1 rounded-full border border-black shadow-md">
                  {item.quantity}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </Block>
  );
}
