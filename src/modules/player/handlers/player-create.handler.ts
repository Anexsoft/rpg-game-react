import type { StatProfileName } from "@player/profile";
import { Player, type PlayerGender } from "@player/types/index.types";

export class PlayerCreateHandler {
  static handle(
    name: string,
    gender: PlayerGender,
    profile: StatProfileName,
  ): Player {
    return new Player(name.trim(), gender, profile);
  }
}
