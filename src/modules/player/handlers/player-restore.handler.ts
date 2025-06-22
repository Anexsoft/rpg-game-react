import type { Player } from "@player/types/index.types";

export class PlayerRestoreHandler {
  static handle(player: Player): Player {
    return {
      ...player,
      hp: player.maxHp,
      sta: player.maxSta,
    };
  }
}
