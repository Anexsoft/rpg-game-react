import Rarity from "@shared/components/Rarity";

import { DEFAULT_SELL_PRICE_RATE } from "@src/modules/items/shared";
import type { ItemBase } from "@src/modules/items/types/index.type";

export type StoreItem = {
  quantity?: number;
} & ItemBase;

type ItemsProps = {
  type: "buy" | "sell";
  items: StoreItem[];
  onClick: (item: ItemBase) => void;
};

export default function StoreItems({ items, onClick, type }: ItemsProps) {
  return (
    <div
      className="max-h-[600px] overflow-y-auto pr-1"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(156, 163, 175, 0.5) transparent",
      }}
    >
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => {
          const isSelling = type === "sell";
          const quantity = isSelling ? item.quantity ?? 1 : undefined;
          const price = isSelling
            ? Math.floor(item.price * DEFAULT_SELL_PRICE_RATE)
            : item.price;

          return (
            <button
              key={item.id}
              onClick={() => onClick(item)}
              className="bg-black/60 border border-gray-700 hover:border-gray-500 p-4 rounded flex transition cursor-pointer gap-4 text-left"
            >
              <img
                src={item.picture}
                alt={item.name}
                className="w-20 h-20 object-contain flex-shrink-0"
              />

              <div className="flex flex-col flex-1">
                <div className="flex justify-between text-xs items-start">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-white">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-bold text-yellow-400">
                    {price.toLocaleString()}₲
                  </span>
                </div>

                <span className="text-xs">
                  <Rarity rarity={item.rarity} />
                </span>

                <span className="text-xs text-gray-300 mt-1">
                  {item.description}
                </span>

                {isSelling && quantity !== undefined && (
                  <span className="text-xs text-gray-400 mt-2 text-right">
                    Quantity: <span className="text-white">{quantity}</span>
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
