import { useGame } from "@core/context/GameContext";

import { PlayerSellItemHandler } from "@player/handlers/player-sell-item.handler";

import { sortWeaponByRarityAndName } from "@weapons/filters/index.filter";
import { WEAPONS } from "@weapons/index";

import { sortArmorByRarityAndName } from "@armor/filters/index.filter";
import { ARMORS } from "@armor/index";

import { CONSUMABLES } from "@consumables/index";

import type { StoreNotification } from "../types";

import StoreItems, { type StoreItem } from "./components/StoreItems";

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

  const items: StoreItem[] = [...weapons, ...armors, ...consumables];

  const handleOnClick = (item: StoreItem) => {
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

  return <StoreItems type="sell" items={items} onClick={handleOnClick} />;
}
