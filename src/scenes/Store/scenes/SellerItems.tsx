import { useGame } from "@core/context/GameContext";

import { PlayerBuyItemHandler } from "@player/handlers/player-buy-item.handler";

import { sortWeaponByRarityAndName } from "@weapons/filters/index.filter";
import { WEAPONS } from "@weapons/index";

import { sortArmorByRarityAndName } from "@armor/filters/index.filter";
import { ARMORS } from "@armor/index";

import { CONSUMABLES } from "@consumables/index";

import type { ItemBase } from "@src/modules/items/types/index.type";

import type { StoreNotification } from "../types";

import StoreItems from "./components/StoreItems";

type SellerItemsProps = {
  setNotification: (value: StoreNotification) => void;
};

export default function SellerItems({ setNotification }: SellerItemsProps) {
  const { player, setPlayer } = useGame();

  const itemLevels = [0, 1, 2];

  const weapons = WEAPONS.sort(sortWeaponByRarityAndName).filter((item) =>
    itemLevels.includes(item.level),
  );

  const armors = ARMORS.sort(sortArmorByRarityAndName).filter(
    (item) => item.rarity === "standard" && itemLevels.includes(item.level),
  );

  const consumables = CONSUMABLES.sort((a, b) => b.price - a.price);

  const items: ItemBase[] = [...weapons, ...armors, ...consumables];

  const handleOnClick = (item: ItemBase) => {
    const result = PlayerBuyItemHandler.handle(player, item.id);

    if (result.status === "success") {
      setNotification({
        type: "success",
        content: `${item.name} purchased successfully.`,
      });

      setPlayer(result.player);
    }

    if (result.status === "not-enough-gold") {
      setNotification({
        type: "warning",
        content: `Not enough gold to buy ${item.name}.`,
      });
    }
  };

  return <StoreItems type="buy" items={items} onClick={handleOnClick} />;
}
