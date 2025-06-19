import { Player } from "@player/types/index.types";

export class PlayerCreateHandler {
  static handle(name: string): Player {
    return new Player(name.trim());
  }
}
