import type { UpgradableStats } from "@ui/types/stats.type";

import { PlayerUpgradeStatHandler } from "@player/handlers/player-upgrade-stat.handler";
import { PlayerUpgradeHandler } from "@player/handlers/player-upgrade.handler";
import type { Player } from "@player/types/index.types";

import type { Weapon } from "@weapons/types/index.type";

import type { Armor } from "@armor/types/index.type";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

import DmgInfo from "./components/DmgInfo";
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
  const armor = ItemGetByIdHandler.handle<Armor>(player.selectedArmor);
  const weapon = ItemGetByIdHandler.handle<Weapon>(player.selectedWeapon);

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

        <DmgInfo
          damage={weapon.dmg * (1 + player.dmg)}
          incrementRate={player.dmg}
        />

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
