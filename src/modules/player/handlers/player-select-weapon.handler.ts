import { Player } from "@player/types/index.types";

import type { WeaponId } from "@weapons/types/ids.types";

export class PlayerSelectWeaponHandler {
  static handle(player: Player, weaponId: WeaponId): Player {
    return {
      ...player,
      selectedWeapon: weaponId,
    };
  }
}
