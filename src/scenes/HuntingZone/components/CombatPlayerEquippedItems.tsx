import { useGame } from "@core/context/GameContext";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

export default function CombatPlayerEquippedItem() {
  const { player } = useGame();

  const weapon = ItemGetByIdHandler.handle("weapon", player.selectedWeapon);
  const armor = ItemGetByIdHandler.handle("armor", player.selectedArmor);

  return (
    <div className="bg-black/50 border border-gray-700 rounded p-4 text-white">
      <div className="flex flex-col justify-center space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-15 aspect-square border border-gray-700 rounded flex items-center justify-center">
            <img
              src={weapon.picture}
              alt="Weapon"
              className="object-contain rounded"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-400">Equipped Weapon</p>
            <p className="text-sm text-white font-semibold truncate max-w-[200px]">
              {weapon.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-15 aspect-square border border-gray-700 rounded flex items-center justify-center">
            <img
              src={armor.picture}
              alt="Armor"
              className="w-full h-full object-contain rounded"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-400">Equipped Armor</p>
            <p className="text-sm text-white font-semibold truncate max-w-[200px]">
              {armor.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
