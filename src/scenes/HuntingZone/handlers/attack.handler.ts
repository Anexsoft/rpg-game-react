import { wait } from "@shared/logger";

import type { Player } from "@player/types/index.types";

import type { Enemy } from "@enemy/types/index.type";

type AttackHandlerParams = {
  player: Player;
  setPlayer: (player: Player) => void;
  enemies: Enemy[];
  setEnemies: (enemies: Enemy[]) => void;
  setIsPlayerTurn: (value: boolean) => void;
  setTurn: (updater: (prev: number) => number) => void;
  setResult: (result: "victory" | "defeat") => void;
};

type AttackHandlerResponse = Promise<"victory" | "defeat" | null>;

export async function attackHandler({
  player,
  setPlayer,
  enemies,
  setEnemies,
  setIsPlayerTurn,
  setTurn,
  setResult,
}: AttackHandlerParams): AttackHandlerResponse {
  const updatedEnemies = [...enemies];
  const target = updatedEnemies.find((e) => e.isAlive);

  if (!target) return null;

  target.takeDamage(player.dmg);
  setEnemies(updatedEnemies);

  await wait(300);
  target.resetAnimations();
  setEnemies([...updatedEnemies]);

  setIsPlayerTurn(false);
  await wait(500);

  const stillAlive = updatedEnemies.some((e) => e.isAlive);
  let result: "victory" | "defeat" | null = null;

  if (!stillAlive) {
    result = "victory";
    setResult(result);

    return result;
  }

  for (const enemy of updatedEnemies) {
    if (!enemy?.isAlive) continue;

    enemy.isAttacking = true;
    setEnemies([...updatedEnemies]);
    await wait(500);

    player.hp = Math.max(player.hp - enemy.dmg, 0);
    setPlayer({ ...player });

    enemy.isAttacking = false;
    setEnemies([...updatedEnemies]);

    if (player.hp <= 0) {
      result = "defeat";
      setResult(result);

      return result;
    }
  }

  setTurn((prev) => prev + 1);
  setIsPlayerTurn(true);
  return result;
}
