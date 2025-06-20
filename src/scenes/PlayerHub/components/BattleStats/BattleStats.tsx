import type { Player } from "@player/types/index.types";

import StatInfo from "./components/StatInfo";

type BattleStatsProps = {
  player: Player;
};

export default function BattleStats({ player }: BattleStatsProps) {
  return (
    <>
      <h3 className="text-lg font-bold text-white mb-2">Battle Stats</h3>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
        <StatInfo type="str" value={player.str} />
        <StatInfo type="dmg" value={player.dmg} />

        <StatInfo type="vit" value={player.vit} />
        <StatInfo type="hp" value={player.hp} />

        <StatInfo type="nrg" value={player.nrg} />
        <StatInfo type="sta" value={player.sta} />

        <StatInfo type="dex" value={player.dex} />
        <StatInfo type="eva" value={player.eva} />

        <StatInfo type="luk" value={player.luk} />
        <StatInfo type="ctr" value={player.ctr} isPercent={true} />

        <StatInfo type="res" value={player.res} isPercent={true} />
      </div>
    </>
  );
}
