import { useGame } from "@core/context/GameContext";

import Rarity from "@shared/components/Rarity";

import { PlayerSellItemHandler } from "@player/handlers/player-sell-item.handler";

import { sortWeaponByRarityAndName } from "@weapons/filters/index.filter";
import { WEAPONS } from "@weapons/index";

import { sortArmorByRarityAndName } from "@armor/filters/index.filter";
import { ARMORS } from "@armor/index";

import { CONSUMABLES } from "@consumables/index";

import { DEFAULT_SELL_PRICE_REDUCTION_RATE } from "@src/modules/items/shared";
import type { ItemBase } from "@src/modules/items/types/index.type";

import type { StoreNotification } from "../types";

type PlayerItemsProps = {
  setNotification: (value: StoreNotification) => void;
};

export default function PlayerItems({ setNotification }: PlayerItemsProps) {
  const { player, setPlayer } = useGame();
  const inventory = player.inventory;

  const weapons = WEAPONS.filter((item) =>
    inventory.some((inv) => inv.id === item.id),
  )
    .sort(sortWeaponByRarityAndName)
    .map((item) => {
      return {
        ...item,
        quantity: inventory.find((inv) => inv.id === item.id)?.quantity,
      };
    });

  const armors = ARMORS.filter((item) =>
    inventory.some((inv) => inv.id === item.id),
  )
    .sort(sortArmorByRarityAndName)
    .map((item) => {
      return {
        ...item,
        quantity: inventory.find((inv) => inv.id === item.id)?.quantity,
      };
    });

  const consumables = CONSUMABLES.filter((item) =>
    inventory.some((inv) => inv.id === item.id),
  ).map((item) => {
    return {
      ...item,
      quantity: inventory.find((inv) => inv.id === item.id)?.quantity,
    };
  });

  const items = [...weapons, ...armors, ...consumables];

  const handleOnClick = (item: ItemBase) => {
    const result = PlayerSellItemHandler.handle(player, item.id);

    if (result.status === "success") {
      setNotification({
        type: "success",
        content: `${item.name} sold successfully.`,
      });

      setPlayer(result.player);
    }

    if (result.status === "cannot-sell-equipped") {
      setNotification({
        type: "warning",
        content: `You can't sell ${item.name} because it's currently equipped and it's your last one.`,
      });
    }
  };

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
          const price = Math.floor(
            item.price * DEFAULT_SELL_PRICE_REDUCTION_RATE,
          );

          return (
            <button
              key={item.id}
              onClick={() => handleOnClick(item)}
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

                <span className="text-xs text-gray-400 mt-2 text-right">
                  Quantity: <span className="text-white">{item.quantity}</span>
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
