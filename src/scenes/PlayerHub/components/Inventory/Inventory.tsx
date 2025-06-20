import type { Player } from "@player/types/index.types";

import { sortWeaponByRarityAndName } from "@weapons/filters/index.filter";
import { WEAPONS } from "@weapons/index";

import { sortArmorByRarityAndName } from "@armor/filters/index.filter";
import { ARMORS } from "@armor/index";

import { AIDS } from "@aid/index";

import AidItem from "./Components/AidItem";
import BattleItem from "./Components/BattleItem";
import EquippedInventory from "./Components/EquippedInventory";

type InventoryProps = {
  player: Player;
};

export default function Inventory({ player }: InventoryProps) {
  const equippedWeapon = WEAPONS.find(
    (item) => item.id === player.selectedWeapon,
  );

  const equippedArmor = ARMORS.find((item) => item.id === player.selectedArmor);

  if (!equippedWeapon || !equippedArmor) {
    return;
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-3">Inventory</h3>
        <div className="grid grid-cols-2 gap-4">
          <EquippedInventory
            label="Weapon"
            name={equippedWeapon.name}
            picture={equippedWeapon.picture}
          />

          <EquippedInventory
            label="Armor"
            name={equippedArmor.name}
            picture={equippedArmor.picture}
          />
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-2">Weapons</h4>
        <div className="grid grid-cols-12">
          {WEAPONS.sort(sortWeaponByRarityAndName)
            .filter((item) => player.inventory.some(({ id }) => id === item.id))
            .map((item) => {
              const availableItem = player.inventory.find(
                ({ id }) => id === item.id,
              );

              if (!availableItem) {
                return;
              }

              return (
                <BattleItem
                  name={item.name}
                  description={item.description}
                  picture={item.picture}
                  rarity={item.rarity}
                  selected={item.id === player.selectedWeapon}
                  quantity={availableItem.quantity}
                />
              );
            })}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-2">Armors</h4>
        <div className="grid grid-cols-12">
          {ARMORS.sort(sortArmorByRarityAndName)
            .filter((item) => player.inventory.some(({ id }) => id === item.id))
            .map((item) => {
              const availableItem = player.inventory.find(
                ({ id }) => id === item.id,
              );

              if (!availableItem) {
                return;
              }

              return (
                <BattleItem
                  name={item.name}
                  description={item.description}
                  picture={item.picture}
                  rarity={item.rarity}
                  selected={item.id === player.selectedArmor}
                  quantity={availableItem.quantity}
                />
              );
            })}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-2">AIDs</h4>
        <div className="grid grid-cols-12">
          {AIDS.filter((item) =>
            player.inventory.some(({ id }) => id === item.id),
          ).map((item) => {
            const availableItem = player.inventory.find(
              ({ id }) => id === item.id,
            );

            if (!availableItem) {
              return;
            }

            return (
              <AidItem
                name={item.name}
                description={item.description}
                picture={item.picture}
                quantity={availableItem.quantity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
