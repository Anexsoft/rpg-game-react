import { Player, type PlayerGender } from "@player/types/index.types";

export class PlayerCreateHandler {
  static handle(name: string, gender: PlayerGender): Player {
    return new Player(name.trim(), gender);
  }
}
