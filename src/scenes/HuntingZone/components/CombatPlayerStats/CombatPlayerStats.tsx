import type { Player } from "@player/types/index.types";

import StatBar from "./components/StarBar";

type CombatPlayerStatsProps = {
  player: Player;
};

export default function CombatPlayerStats({ player }: CombatPlayerStatsProps) {
  return (
    <div className="bg-black/50 border border-gray-700 rounded p-4 text-white">
      <div className="flex flex-col items-center justify-center text-center space-y-4 w-full">
        <div className="flex gap-4 w-full space-y-2">
          <StatBar type="hp" value={player.hp} max={30} />
          <StatBar type="sta" value={10} max={10} />
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs text-white w-full">
          <div className="bg-gray-800/60 p-2 rounded">
            <p className="text-gray-400">ATK</p>
            <p className="text-lg font-bold">{player.dmg}</p>
          </div>
          <div className="bg-gray-800/60 p-2 rounded">
            <p className="text-gray-400">CTR</p>
            <p className="text-lg font-bold">{player.ctr}%</p>
          </div>
          <div className="bg-gray-800/60 p-2 rounded">
            <p className="text-gray-400">EVA</p>
            <p className="text-lg font-bold">{player.eva}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
