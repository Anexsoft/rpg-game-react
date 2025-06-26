import { PlayerSelectArmorHandler } from "@player/handlers/player-select-armor.handler";
import { PlayerSelectWeaponHandler } from "@player/handlers/player-select-weapon.handler";
import type { Player } from "@player/types/index.types";

import { sortWeaponByRarityAndName } from "@weapons/filters/index.filter";
import { WEAPONS } from "@weapons/index";
import type { WeaponId } from "@weapons/types/ids.type";
import type { Weapon } from "@weapons/types/index.type";

import { sortArmorByRarityAndName } from "@armor/filters/index.filter";
import { ARMORS } from "@armor/index";
import type { ArmorId } from "@armor/types/ids.types";
import type { Armor } from "@armor/types/index.type";

import { sortByTypeAndRestoreRate } from "@consumables/filters/index.filter";

import { CONSUMABLES } from "@src/modules/items/consumables/index";
import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

import ArmorItem from "./Components/ArmorItem";
import ConsumableItem from "./Components/ConsumableItem";
import EquippedInventory from "./Components/EquippedInventory";
import WeaponItem from "./Components/WeaponItem";

type InventoryProps = {
  player: Player;
  setPlayer: (player: Player) => void;
};

export default function Inventory({ player, setPlayer }: InventoryProps) {
  const equippedWeapon = ItemGetByIdHandler.handle<Weapon>(
    player.selectedWeapon
  );
  const equippedArmor = ItemGetByIdHandler.handle<Armor>(player.selectedArmor);

  const updateArmor = (id: ArmorId) => {
    setPlayer(PlayerSelectArmorHandler.handle(player, id));
  };

  const updateWeapon = (id: WeaponId) => {
    setPlayer(PlayerSelectWeaponHandler.handle(player, id));
  };

  const weapons = WEAPONS.sort(sortWeaponByRarityAndName).filter(({ id }) =>
    player.inventory.some((item) => item.id === id)
  );

  const armors = ARMORS.sort(sortArmorByRarityAndName).filter(({ id }) =>
    player.inventory.some((item) => item.id === id)
  );

  const consumables = CONSUMABLES.sort(sortByTypeAndRestoreRate).filter(
    ({ id }) => player.inventory.some((item) => item.id === id)
  );

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
        <div className="grid grid-cols-9 gap-6">
          {weapons.map((item) => {
            const available = player.inventory.find(({ id }) => id === item.id);
            if (!available) return null;

            return (
              <WeaponItem
                key={item.id}
                item={item}
                onClick={() => updateWeapon(item.id as WeaponId)}
                selected={item.id === player.selectedWeapon}
                quantity={available.quantity}
              />
            );
          })}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-2">Armors</h4>
        <div className="grid grid-cols-9 gap-6">
          {armors.map((item) => {
            const available = player.inventory.find(({ id }) => id === item.id);
            if (!available) return null;

            return (
              <ArmorItem
                key={item.id}
                item={item}
                onClick={() => updateArmor(item.id as ArmorId)}
                selected={item.id === player.selectedArmor}
                quantity={available.quantity}
              />
            );
          })}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-2">Consumables</h4>
        {consumables.length === 0 ? (
          <p className="text-gray-400 text-sm">No items available</p>
        ) : (
          <div className="grid grid-cols-9 gap-6">
            {consumables.map((item) => {
              const available = player.inventory.find(
                ({ id }) => id === item.id
              );
              if (!available) return null;

              return (
                <ConsumableItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  picture={item.picture}
                  quantity={available.quantity}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
