import type { Player } from "@player/types/index.types";

type PlayerInfoProps = {
  avatar: string;
  player: Player;
};

export default function PlayerInfo({ avatar, player }: PlayerInfoProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <img
        src={avatar}
        alt="Hero Avatar"
        className="w-full rounded border-2 border-gray-600 object-cover"
      />

      <div className="w-full grid grid-cols-2 gap-2 text-white text-sm">
        <div className="text-center">
          <h2 className="font-bold text-base">{player.name}</h2>
          <p className="text-gray-400 text-sm">{player.rank}</p>
        </div>

        <div className="text-center">
          <p className="font-semibold">Current Level</p>
          <p className="text-gray-400 text-lg">{player.level}</p>
        </div>
      </div>
    </div>
  );
}
