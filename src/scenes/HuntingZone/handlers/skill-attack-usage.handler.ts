import { wait } from "@shared/index";

import { PlayerSkillAttackHandler } from "@player/handlers/player-skill-attack.handler";
import type { Player } from "@player/types/index.types";

import type { Enemy } from "@enemy/types/index.type";

type SkillAttackUsageHandlerProps = {
  player: Player;
  setPlayer: (player: Player) => void;
  enemies: Enemy[];
  setEnemies: (enemies: Enemy[]) => void;
};

export async function skillAttackUsageHandler({
  player,
  setPlayer,
  enemies,
  setEnemies,
}: SkillAttackUsageHandlerProps): Promise<void> {
  const { updatedEnemies, updatedPlayer } = PlayerSkillAttackHandler.handle(
    player,
    enemies,
  );

  setEnemies(updatedEnemies);
  setPlayer(updatedPlayer);

  await wait(500);
}
