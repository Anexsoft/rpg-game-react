import type { Player } from "@player/types/index.types";

export class PlayerUpdateCombatHistoryHandler {
  static handle(player: Player, status: "victory" | "defeat"): Player {
    return {
      ...player,
      victories: status === "victory" ? player.victories + 1 : player.victories,
      defeats: status === "defeat" ? player.defeats + 1 : player.defeats,
    };
  }
}
