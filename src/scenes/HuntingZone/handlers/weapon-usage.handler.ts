import { wait } from "@shared/index";

import { PlayerAttackHandler } from "@player/handlers/player-attack.handler";
import type { Player } from "@player/types/index.types";

import type { Enemy } from "@enemy/types/index.type";

type WeaponUsageHandlerProps = {
  skipPlayerAttack: boolean;
  player: Player;
  setPlayer: (player: Player) => void;
  enemies: Enemy[];
  setEnemies: (enemies: Enemy[]) => void;
  setTurn: (updater: (prev: number) => number) => void;
};

export async function weaponUsageHandler({
  skipPlayerAttack,
  player,
  setPlayer,
  enemies,
  setEnemies,
  setTurn,
}: WeaponUsageHandlerProps): Promise<void> {
  let _enemies = [...enemies];

  if (!skipPlayerAttack) {
    _enemies = PlayerAttackHandler.handle(player, enemies);
    setEnemies([...enemies]);

    await wait(500);
  }

  _enemies.forEach((enemy) => (enemy.actionStatus = null));
  setEnemies([..._enemies]);

  const stillAlive = _enemies.some((e) => e.isAlive);

  if (!stillAlive) {
    return;
  }

  for (const enemy of _enemies.filter(({ isAlive }) => isAlive)) {
    enemy.attack(player);

    setPlayer({ ...player });
    setEnemies([..._enemies]);

    await wait(500);
    enemy.actionStatus = null;

    setEnemies([..._enemies]);
  }

  setTurn((prev) => prev + 1);
}
