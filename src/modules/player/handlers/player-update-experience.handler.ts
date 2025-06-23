import { LEVELS, MAX_LEVEL } from "@player/levels";
import { LEVEL_RANKS } from "@player/ranks";
import { STATS_AVAILABLE_PER_LEVEL } from "@player/stats-progress";
import type { Player } from "@player/types/index.types";

import { PlayerRestoreHandler } from "./player-restore.handler";

export class PlayerUpdateExperienceHandler {
  static handle(player: Player, earnedExp: number): Player {
    const newExp = player.exp + earnedExp;
    const newLevel = this.getNewLevel(newExp, player.level);
    const expToNextLevel = this.getExpToNextLevel(newLevel, newExp);

    const gainedLevels = newLevel - player.level;
    const additionalStats = gainedLevels * STATS_AVAILABLE_PER_LEVEL;

    const rank = LEVEL_RANKS.reduce((acc, curr) => {
      return newLevel >= curr.level ? curr : acc;
    }, LEVEL_RANKS[0]).name;

    const updatedPlayer =
      gainedLevels > 0 ? PlayerRestoreHandler.handle(player) : player;

    return {
      ...updatedPlayer,
      exp: newExp,
      level: newLevel,
      expToNextLevel,
      avilableStatsPoints: player.avilableStatsPoints + additionalStats,
      rank,
    };
  }

  private static getNewLevel(exp: number, currentLevel: number): number {
    const index = LEVELS.findIndex(([min, max]) => exp >= min && exp <= max);
    return index !== -1 ? index + 1 : currentLevel;
  }

  private static getExpToNextLevel(level: number, exp: number): number {
    if (level >= MAX_LEVEL) return 0;
    const nextIndex = Math.min(level, LEVELS.length - 1);
    return Math.max(LEVELS[nextIndex][0] - exp, 0);
  }
}
