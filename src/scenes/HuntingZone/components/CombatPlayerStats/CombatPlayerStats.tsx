import type { Player } from "@player/types/index.types";

import { WEAPONS } from "@weapons/index";

import StatBar from "./components/StarBar";

type CombatPlayerStatsProps = {
  player: Player;
};

export default function CombatPlayerStats({ player }: CombatPlayerStatsProps) {
  const weapon = WEAPONS.find((weapon) => weapon.id === player.selectedWeapon);
  if (!weapon) {
    throw new Error("Equipped weapon could not be found");
  }

  const playerDamage = weapon.dmg * (1 + player.dmg);

  return (
    <div className="bg-black/50 border border-gray-700 rounded p-4 text-white">
      <div className="flex flex-col items-center justify-center text-center space-y-4 w-full">
        <div className="flex gap-4 w-full space-y-2">
          <StatBar type="hp" value={player.hp} max={player.maxHp} />
          <StatBar type="sta" value={player.sta} max={player.maxSta} />
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs text-white w-full">
          <div className="bg-gray-800/60 p-2 rounded">
            <p className="text-gray-400">ATK</p>
            <p className="text-lg font-bold">{playerDamage.toFixed(1)}</p>
          </div>
          <div className="bg-gray-800/60 p-2 rounded">
            <p className="text-gray-400">CTR</p>
            <p className="text-lg font-bold">{player.ctr * 100}%</p>
          </div>
          <div className="bg-gray-800/60 p-2 rounded">
            <p className="text-gray-400">EVA</p>
            <p className="text-lg font-bold">{player.eva * 100}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
