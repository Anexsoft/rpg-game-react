import { wait } from "@shared/index";

import { PlayerAttackHandler } from "@player/handlers/player-attack.handler";
import type { Player } from "@player/types/index.types";

import type { Enemy } from "@enemy/types/index.type";

type WeaponUsageHandlerProps = {
  player: Player;
  setPlayer: (player: Player) => void;
  enemies: Enemy[];
  setEnemies: (enemies: Enemy[]) => void;
  setTurn: (updater: (prev: number) => number) => void;
};

export async function weaponUsageHandler({
  player,
  setPlayer,
  enemies,
  setEnemies,
  setTurn,
}: WeaponUsageHandlerProps): Promise<void> {
  enemies = PlayerAttackHandler.handle(player, enemies);
  setEnemies([...enemies]);

  await wait(500);

  enemies.forEach((enemy) => (enemy.actionStatus = null));
  setEnemies([...enemies]);

  const stillAlive = enemies.some((e) => e.isAlive);

  if (!stillAlive) {
    return;
  }

  for (const enemy of enemies.filter(({ isAlive }) => isAlive)) {
    enemy.attack(player);

    setPlayer({ ...player });
    setEnemies([...enemies]);

    await wait(500);
    enemy.actionStatus = null;

    setEnemies([...enemies]);
  }

  setTurn((prev) => prev + 1);
}
