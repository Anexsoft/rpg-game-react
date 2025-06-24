import type { UpgradableStats } from "@ui/types/stats.type";

import { PlayerUpgradeStatHandler } from "@player/handlers/player-upgrade-stat.handler";
import { PlayerUpgradeHandler } from "@player/handlers/player-upgrade.handler";
import type { Player } from "@player/types/index.types";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

import StatInfo from "./components/StatInfo";

type BattleStatsProps = {
  player: Player;
  setPlayer: (p: Player) => void;
};

export default function BattleStats({ player, setPlayer }: BattleStatsProps) {
  const handleUpgradeStat = (stat: UpgradableStats) => {
    let updatedPlayer = PlayerUpgradeStatHandler.handle(player, stat);
    updatedPlayer = PlayerUpgradeHandler.handle(updatedPlayer);

    setPlayer(updatedPlayer);
  };

  const enableStatUpgradeButton = player.availableStatPoints > 0;
  const armor = ItemGetByIdHandler.handle("armor", player.selectedArmor);

  return (
    <>
      <h3 className="text-lg font-bold text-white mb-2">Battle Stats</h3>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
        <StatInfo
          type="str"
          value={player.str}
          enableStatUpgradeButton={enableStatUpgradeButton}
          handleUpgradeStat={handleUpgradeStat}
        />
        <StatInfo type="dmg" value={player.dmg} isPercent={true} />

        <StatInfo
          type="vit"
          value={player.vit}
          enableStatUpgradeButton={enableStatUpgradeButton}
          handleUpgradeStat={handleUpgradeStat}
        />
        <StatInfo type="hp" value={player.hp} />

        <StatInfo
          type="nrg"
          value={player.nrg}
          enableStatUpgradeButton={enableStatUpgradeButton}
          handleUpgradeStat={handleUpgradeStat}
        />
        <StatInfo type="sta" value={player.sta} />

        <StatInfo
          type="dex"
          value={player.dex}
          enableStatUpgradeButton={enableStatUpgradeButton}
          handleUpgradeStat={handleUpgradeStat}
        />
        <StatInfo type="eva" value={player.eva} isPercent={true} />

        <StatInfo
          type="luk"
          value={player.luk}
          enableStatUpgradeButton={enableStatUpgradeButton}
          handleUpgradeStat={handleUpgradeStat}
        />

        <StatInfo type="ctr" value={player.ctr} isPercent={true} />

        <StatInfo type="res" value={armor.def} isPercent={true} />
      </div>
    </>
  );
}
