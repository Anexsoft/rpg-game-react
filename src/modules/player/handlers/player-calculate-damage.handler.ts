import { Player } from "@player/types/index.types";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

export type PlayerCalculateDamageHandlerResponse = {
  amount: number;
  isCritical: boolean;
};

export type WeaponTarget =
  | { type: "single"; damageMultiplier: 1 }
  | { type: "multiple"; targets: number; damageMultiplier: number }
  | { type: "random"; targets: number; damageMultiplier: number };

export class PlayerCalculateDamageHandler {
  static handle(
    player: Player,
    enemyResistance: number,
    overrideMultiplier?: number,
  ): PlayerCalculateDamageHandlerResponse {
    const weapon = ItemGetByIdHandler.handle("weapon", player.selectedWeapon);

    const isCritical = Math.random() < player.ctr;
    const baseDamage = weapon.dmg * (1 + player.dmg);
    const criticalMultiplier = 1.5;

    const rawDamage = isCritical ? baseDamage * criticalMultiplier : baseDamage;

    const damageMultiplier =
      overrideMultiplier ?? weapon.target?.damageMultiplier ?? 1;

    const reducedDamage = Math.max(
      Math.floor(rawDamage * damageMultiplier * (1 - enemyResistance)),
      1,
    );

    return {
      amount: reducedDamage,
      isCritical,
    };
  }
}
