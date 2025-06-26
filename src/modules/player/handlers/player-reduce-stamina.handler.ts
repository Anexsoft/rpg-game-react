import type { Player } from "@player/types/index.types";

export class PlayerReduceStaminaHandler {
  static handle(player: Player, amount: number) {
    const updatedPlayer = { ...player };

    updatedPlayer.sta = Math.max(0, updatedPlayer.sta - amount);

    return updatedPlayer;
  }
}
