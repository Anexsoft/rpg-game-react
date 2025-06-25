import { useGame } from "@core/context/GameContext";

import Block from "@ui/Block";

import { getPlayerAvatar } from "@player/utils/index";

export default function CombatPlayerAvatar() {
  const { player } = useGame();
  const avatar = getPlayerAvatar(player.gender);

  return (
    <Block>
      <img src={avatar} alt={player.name} className="object-cover" />
    </Block>
  );
}
