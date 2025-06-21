import type { Player } from "@player/types/index.types";

import { CONSUMABLES } from "@consumables/index";

type CombatPlayerConsumableItemsProps = {
  player: Player;
};

export default function CombatPlayerConsumableItems({
  player,
}: CombatPlayerConsumableItemsProps) {
  const items = player.inventory.filter((item) => item.type === "consumable");

  return (
    <div className="bg-black/50 border border-gray-700 rounded p-4 text-white">
      {items.length === 0 ? (
        <p className="text-center text-gray-400 text-sm">No items available</p>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {items.map((item) => {
            const consumableItem = CONSUMABLES.find((c) => c.id === item.id);
            if (!consumableItem) return null;

            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center justify-center border border-gray-700 hover:border-gray-400 cursor-pointer rounded"
              >
                <img
                  src={consumableItem.picture}
                  alt={consumableItem.name}
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
