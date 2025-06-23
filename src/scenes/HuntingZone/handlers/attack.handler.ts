import { wait } from "@shared/logger";

import { PlayerPushRewardsHandler } from "@player/handlers/player-push-rewards.handler";
import { PlayerUpdateExperienceHandler } from "@player/handlers/player-update-experience.handler";
import { PlayerUpgradeHandler } from "@player/handlers/player-upgrade.handler";
import type { Player } from "@player/types/index.types";

import type { Enemy } from "@enemy/types/index.type";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";
import type { ItemBase } from "@src/modules/items/types/index.type";
import { ZoneGetRewardsHandler } from "@src/modules/zones/handlers/zone-get-rewards.handler";
import type { ZoneId } from "@src/modules/zones/types/ids.types";

import type { HuntingZoneRewards } from "../types/index.type";

type AttackHandlerParams = {
  zoneId: ZoneId;
  player: Player;
  setPlayer: (player: Player) => void;
  enemies: Enemy[];
  setEnemies: (enemies: Enemy[]) => void;
  setIsPlayerTurn: (value: boolean) => void;
  setTurn: (updater: (prev: number) => number) => void;
  setResult: (result: "victory" | "defeat") => void;
  setRewards: (rewards: HuntingZoneRewards) => void;
};

type AttackHandlerResponse = Promise<"victory" | "defeat" | null>;

function updatePlayerRewards(
  player: Player,
  zoneId: ZoneId,
  enemies: Enemy[],
  setRewards: (rewards: HuntingZoneRewards) => void,
): Player {
  const rewards = ZoneGetRewardsHandler.handle(zoneId);
  player = PlayerPushRewardsHandler.handle(player, rewards);

  const gold = enemies.reduce((acc, e) => acc + e.goldGiven, 0);
  player.gold += gold;

  const totalExp = enemies.reduce((acc, e) => acc + e.expGiven, 0);
  player = PlayerUpdateExperienceHandler.handle(player, totalExp);

  player = PlayerUpgradeHandler.handle(player);

  setRewards({
    gold,
    rewards: rewards.map(
      (item) => ItemGetByIdHandler.handle(item.type, item.id) as ItemBase,
    ),
  });

  return player;
}

function getEnemyTargets(player: Player, enemies: Enemy[]): Enemy[] {
  const weapon = ItemGetByIdHandler.handle("weapon", player.selectedWeapon);

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

export async function attackHandler({
  zoneId,
  player,
  setPlayer,
  enemies,
  setEnemies,
  setIsPlayerTurn,
  setTurn,
  setResult,
  setRewards,
}: AttackHandlerParams): AttackHandlerResponse {
  const targets = getEnemyTargets(player, enemies);

  for (const enemy of targets) {
    enemy.takeDamage(player);
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
    updatePlayerRewards(player, zoneId, enemies, setRewards);

    const updatedPlayer = updatePlayerRewards(
      player,
      zoneId,
      enemies,
      setRewards,
    );
    setPlayer(updatedPlayer);

    return result;
  }

  for (const enemy of enemies.filter(({ isAlive }) => isAlive)) {
    enemy.attack(player);

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
