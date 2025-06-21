import { getPlayerAvatar } from "@player/utils/index";
import type { Player } from "@player/types/index.types";

type CombatPlayerAvatarProps = {
  player: Player;
};

export default function CombatPlayerAvatar({
  player,
}: CombatPlayerAvatarProps) {
  const avatar = getPlayerAvatar(player.gender);

  return (
    <div className="border border-gray-700 rounded ">
      <img src={avatar} alt={player.name} className="object-cover" />
    </div>
  );
}
