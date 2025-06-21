import type { Player } from "@player/types/index.types";

import { WEAPONS } from "@weapons/index";

import { ARMORS } from "@armor/index";

type CombatPlayerEquippedItemProps = {
  player: Player;
};

export default function CombatPlayerEquippedItem({
  player,
}: CombatPlayerEquippedItemProps) {
  const weapon = WEAPONS.find((w) => w.id === player.selectedWeapon);
  const armor = ARMORS.find((a) => a.id === player.selectedArmor);

  if (!weapon || !armor) {
    return;
  }

  return (
    <div className="bg-black/50 border border-gray-700 rounded p-4 text-white">
      <div className="flex flex-col justify-center space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-15 aspect-square border border-gray-700 rounded flex items-center justify-center">
            <img
              src={weapon.picture}
              alt="Weapon"
              className="w-full h-full object-contain rounded"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-400">Equipped Weapon</p>
            <p className="text-sm text-white font-semibold truncate max-w-[300px]">
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
            <p className="text-sm text-white font-semibold truncate max-w-[300px]">
              {armor.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
