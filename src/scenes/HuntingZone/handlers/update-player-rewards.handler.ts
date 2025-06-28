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

export function updatePlayerRewards(
  player: Player,
  zoneId: ZoneId,
  enemies: Enemy[],
  setRewards: (rewards: HuntingZoneRewards) => void,
): Player {
  let _player = { ...player };

  const rewards = ZoneGetRewardsHandler.handle(zoneId);
  _player = PlayerPushRewardsHandler.handle(_player, rewards);

  const gold = enemies.reduce((acc, e) => acc + e.goldGiven, 0);
  _player.gold += gold;

  const totalExp = enemies.reduce((acc, e) => acc + e.expGiven, 0);

  const { updatedPlayer, newLevelEarned } =
    PlayerUpdateExperienceHandler.handle(_player, totalExp);

  _player = updatedPlayer;

  if (newLevelEarned) {
    _player = PlayerUpgradeHandler.handle(_player);
  }

  setRewards({
    gold,
    exp: totalExp,
    rewards: rewards.map(
      (item) => ItemGetByIdHandler.handle(item.id) as ItemBase,
    ),
  });

  return _player;
}
