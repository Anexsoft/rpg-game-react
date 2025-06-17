import { Player } from "@player/types/player";

export class PlayerCreateHandler {
  static handle(name: string): Player {
    return new Player(name.trim());
  }
}
