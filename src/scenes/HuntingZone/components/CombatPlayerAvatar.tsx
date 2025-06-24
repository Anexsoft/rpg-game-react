import { useGame } from "@core/context/GameContext";

import { getPlayerAvatar } from "@player/utils/index";

export default function CombatPlayerAvatar() {
  const { player } = useGame();
  const avatar = getPlayerAvatar(player.gender);

  return (
    <div className="border border-gray-700 rounded ">
      <img src={avatar} alt={player.name} className="object-cover" />
    </div>
  );
}
