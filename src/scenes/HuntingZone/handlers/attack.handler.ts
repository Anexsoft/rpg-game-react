import { wait } from "@shared/logger";

import { PlayerCalculateDamageHandler } from "@player/handlers/player-calculate-damage.handler";
import type { Player } from "@player/types/index.types";

import type { Enemy } from "@enemy/types/index.type";

import { WEAPONS } from "@weapons/index";

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

function getEnemyTargets(player: Player, enemies: Enemy[]): Enemy[] {
  const weapon = WEAPONS.find((weapon) => weapon.id === player.selectedWeapon);

  if (!weapon) {
    throw new Error("Equipped weapon could not be found");
  }

  if (weapon.target.type === "single") {
    const target = enemies.find((enemy) => enemy.isAlive);
    return target ? [target] : [];
  }

  if (weapon.target.type === "multiple") {
    return enemies
      .filter((enemy) => enemy.isAlive)
      .slice(0, weapon.target.targets);
  }

  if (weapon.target.type === "random") {
    const aliveEnemies = enemies.filter((enemy) => enemy.isAlive);

    const shuffled = [...aliveEnemies].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, weapon.target.targets);
  }

  return [];
}

function damageEnemy(player: Player, target: Enemy): void {
  const { amount, isCritical } = PlayerCalculateDamageHandler.handle(
    player,
    target.res,
  );

  target.takeDamage(amount, isCritical);
}

function damagePlayer(enemy: Enemy, target: Player): void {
  enemy.attack(target);
}

export async function attackHandler({
  player,
  setPlayer,
  enemies,
  setEnemies,
  setIsPlayerTurn,
  setTurn,
  setResult,
}: AttackHandlerParams): AttackHandlerResponse {
  const targets = getEnemyTargets(player, enemies);

  for (const enemy of targets) {
    damageEnemy(player, enemy);
    setEnemies([...enemies]);
  }

  setEnemies([...enemies]);
  setIsPlayerTurn(false);

  await wait(500);

  targets.forEach((target) => (target.actionStatus = null));
  setEnemies([...enemies]);

  const stillAlive = enemies.some((e) => e.isAlive);
  let result: "victory" | "defeat" | null = null;

  if (!stillAlive) {
    result = "victory";
    setResult(result);

    return result;
  }

  for (const enemy of enemies.filter(({ isAlive }) => isAlive)) {
    damagePlayer(enemy, player);

    setPlayer({ ...player });
    setEnemies([...enemies]);

    await wait(500);
    enemy.actionStatus = null;

    setEnemies([...enemies]);

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
