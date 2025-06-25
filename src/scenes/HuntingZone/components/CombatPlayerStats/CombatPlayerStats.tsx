import { useGame } from "@core/context/GameContext";

import Block from "@ui/Block";

import type { Weapon } from "@weapons/types/index.type";

import type { Armor } from "@armor/types/index.type";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

import StatBar from "./components/StarBar";

export default function CombatPlayerStats() {
  const { player } = useGame();

  const weapon = ItemGetByIdHandler.handle<Weapon>(player.selectedWeapon);
  const armor = ItemGetByIdHandler.handle<Armor>(player.selectedArmor);

  const playerDamage = weapon.dmg * (1 + player.dmg);

  return (
    <Block>
      <div className="flex flex-col items-center justify-center text-center space-y-4 w-full">
        <div className="flex gap-4 w-full space-y-2">
          <StatBar type="hp" value={player.hp} max={player.maxHp} />
          <StatBar type="sta" value={player.sta} max={player.maxSta} />
        </div>
        <div className="grid grid-cols-4 gap-2 text-xs text-white w-full">
          <div className="bg-gray-800/60 p-1 rounded">
            <p className="text-gray-400">ATK</p>
            <p className="text-lg font-bold">{playerDamage.toFixed(1)}</p>
          </div>
          <div className="bg-gray-800/60 p-1 rounded">
            <p className="text-gray-400">CTR</p>
            <p className="text-lg font-bold">
              {(player.ctr * 100).toFixed(1)}%
            </p>
          </div>
          <div className="bg-gray-800/60 p-1 rounded">
            <p className="text-gray-400">EVA</p>
            <p className="text-lg font-bold">
              {(player.eva * 100).toFixed(1)}%
            </p>
          </div>
          <div className="bg-gray-800/60 p-1 rounded">
            <p className="text-gray-400">RES</p>
            <p className="text-lg font-bold">{(armor.def * 100).toFixed(1)}%</p>
          </div>
        </div>
      </div>
    </Block>
  );
}
