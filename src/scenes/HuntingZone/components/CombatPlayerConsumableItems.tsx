import type { Player } from "@player/types/index.types";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

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
            const consumable = ItemGetByIdHandler.handle("consumable", item.id);

            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center justify-center border border-gray-700 hover:border-gray-400 cursor-pointer rounded"
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
