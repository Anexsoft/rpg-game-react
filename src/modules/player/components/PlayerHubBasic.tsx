import { useGame } from "@core/context/GameContext";

import avatar from "@resources/images/player/avatar.png";

export default function PlayerHubBasic() {
  const { player } = useGame();

  if (!player) {
    return;
  }

  return (
    <div className="text-sm text-gray-200">
      {/* Avatar + Name */}
      <div className="mb-5 flex items-center gap-4">
        <img
          src={avatar}
          alt="Avatar"
          className="h-12 w-12 rounded-full border-2 border-yellow-400 object-cover"
        />
        <div>
          <div className="text-base font-bold text-yellow-400">
            {player.name}
          </div>
          <div className="text-xs text-gray-400">
            Lv. {player.level} - {player.rank}
          </div>
        </div>
      </div>

      <div className="grid items-center grid-cols-2 gap-4">
        {/* HP */}
        <div>
          <div className="mb-1 flex justify-between text-xs text-red-400">
            <span>HP</span>
            <span>
              {player.hp}/{player.maxHp}
            </span>
          </div>
          <div className="h-2 w-full rounded bg-red-900">
            <div
              className="h-full rounded bg-red-500"
              style={{ width: `${(player.hp / player.maxHp) * 100}%` }}
            />
          </div>
        </div>

        {/* MP */}
        <div>
          <div className="mb-1 flex justify-between text-xs text-blue-400">
            <span>MP</span>
            <span>
              {player.mp}/{player.maxMp}
            </span>
          </div>
          <div className="h-2 w-full rounded bg-blue-900">
            <div
              className="h-full rounded bg-blue-500"
              style={{ width: `${(player.mp / player.maxMp) * 100}%` }}
            />
          </div>
        </div>

        {/* XP */}
        <div>
          <div className="mb-1 flex justify-between text-xs text-purple-400">
            <span>XP</span>
            <span>
              {player.exp}/{player.expToNextLevel}
            </span>
          </div>
          <div className="h-2 w-full rounded bg-purple-900">
            <div
              className="h-full rounded bg-purple-500"
              style={{
                width: `${(player.exp / player.expToNextLevel) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Gold */}
        <div className="flex items-center justify-between text-xs text-yellow-400">
          <span>Gold</span>
          <span>{player.gold}</span>
        </div>
      </div>
    </div>
  );
}
