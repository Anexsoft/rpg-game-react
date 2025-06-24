import { useEffect, useState } from "react";

import { useGame } from "@core/context/GameContext";

import { PlayerUseConsumableHandler } from "@player/handlers/player-use-consumable.handler";

import type { ConsumableId } from "@consumables/types/ids.types";

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

  const items = player.inventory.filter((item) => item.type === "consumable");

  return (
    <div className="bg-black/50 border border-gray-700 rounded p-4 text-white">
      {items.length === 0 ? (
        <p className="text-center text-gray-400 text-sm">No items available</p>
      ) : (
        <div className="grid grid-cols-5 gap-2">
          {items.map((item) => {
            const consumable = ItemGetByIdHandler.handle("consumable", item.id);

            return (
              <div
                key={item.id}
                onClick={() =>
                  isEnabled && handleUseConsumable(item.id as ConsumableId)
                }
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
    </div>
  );
}
