import { LEVELS, MAX_LEVEL } from "@player/levels";
import { LEVEL_RANKS } from "@player/ranks";
import { STATS_AVAILABLE_PER_LEVEL } from "@player/stats-progress";
import type { Player } from "@player/types/index.types";

import { PlayerRestoreHandler } from "./player-restore.handler";

export type PlayerUpdateExperienceResponse = {
  updatedPlayer: Player;
  newLevelEarned: boolean;
};

export class PlayerUpdateExperienceHandler {
  static handle(
    player: Player,
    earnedExp: number,
  ): PlayerUpdateExperienceResponse {
    const newExp = player.exp + earnedExp;
    const newLevel = this.getNewLevel(newExp, player.level);
    const expToNextLevel = this.getExpToNextLevel(newLevel);

    const gainedLevels = newLevel - player.level;
    const additionalStats = gainedLevels * STATS_AVAILABLE_PER_LEVEL;

    const rank = LEVEL_RANKS.reduce((acc, curr) => {
      return newLevel >= curr.level ? curr : acc;
    }, LEVEL_RANKS[0]).name;

    const updatedPlayer =
      gainedLevels > 0 ? PlayerRestoreHandler.handle(player) : player;

    return {
      updatedPlayer: {
        ...updatedPlayer,
        exp: newExp,
        level: newLevel,
        expToNextLevel,
        availableStatPoints: player.availableStatPoints + additionalStats,
        rank,
      },
      newLevelEarned: gainedLevels > 0,
    };
  }

  private static getNewLevel(exp: number, currentLevel: number): number {
    const index = LEVELS.findIndex(([min, max]) => exp >= min && exp <= max);
    return index !== -1 ? index + 1 : currentLevel;
  }

  private static getExpToNextLevel(level: number): number {
    if (level >= MAX_LEVEL) {
      return LEVELS[LEVELS.length - 1][1];
    }

    const nextIndex = Math.min(level, LEVELS.length - 1);
    return Math.max(LEVELS[nextIndex][1], 0);
  }
}
