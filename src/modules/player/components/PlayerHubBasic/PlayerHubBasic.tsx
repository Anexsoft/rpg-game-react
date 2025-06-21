import { useGame } from "@core/context/GameContext";

import { GOLD_STYLES } from "@ui/theme/gold";

import { getPlayerAvatar } from "@player/utils/index";

import Stat from "./components/Stat";

export default function PlayerHubBasic() {
  const { player } = useGame();
  const avatar = getPlayerAvatar(player.gender);

  return (
    <div className="text-sm text-gray-200">
      <div className="mb-5 flex items-center gap-4">
        <img
          src={avatar}
          alt="Avatar"
          className="w-12 border-1 rounded border-gray-400 object-cover"
        />
        <div>
          <div className="text-base font-bold text-gray-200">{player.name}</div>
          <div className="text-xs text-gray-400">
            Lv. {player.level} - {player.rank}
          </div>
        </div>
      </div>

      <div className="grid items-center grid-cols-2 gap-4">
        <Stat type="hp" current={player.hp} max={player.maxHp} />
        <Stat type="nrg" current={player.sta} max={player.maxSta} />
        <Stat type="exp" current={player.exp} max={player.expToNextLevel} />

        <div
          className={`flex items-center justify-between text-xs ${GOLD_STYLES.text}`}
        >
          <span>{GOLD_STYLES.label}</span>
          <span>{player.gold}</span>
        </div>
      </div>
    </div>
  );
}
