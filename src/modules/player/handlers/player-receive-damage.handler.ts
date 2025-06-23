import { Player } from "@player/types/index.types";

export class PlayerReceiveDamageHandler {
  static handle(player: Player, dmg: number): Player {
    return {
      ...player,
      hp: Math.max(player.hp - dmg, 0),
    };
  }
}
