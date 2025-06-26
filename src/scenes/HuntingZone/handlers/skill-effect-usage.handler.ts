import { wait } from "@shared/index";

import { PlayerSkillEffectHandler } from "@player/handlers/player-skill-effect.handler";
import type { Player } from "@player/types/index.types";

import type { Enemy } from "@enemy/types/index.type";

type skillEffectUsageHandlerProps = {
  player: Player;
  setPlayer: (player: Player) => void;
  enemies: Enemy[];
  setEnemies: (enemies: Enemy[]) => void;
};

export async function skillEffectUsageHandler({
  player,
  setPlayer,
  enemies,
  setEnemies,
}: skillEffectUsageHandlerProps): Promise<void> {
  const { updatedEnemies, updatedPlayer } = PlayerSkillEffectHandler.handle(
    player,
    enemies
  );

  setEnemies(updatedEnemies);
  setPlayer(updatedPlayer);

  await wait(500);
}
