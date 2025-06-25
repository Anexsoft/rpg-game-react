import { Player } from "@player/types/index.types";

import type { Weapon } from "@weapons/types/index.type";

import { ItemGetByIdHandler } from "@src/modules/items/handlers/item-get-by-id.handler";

export type PlayerCalculateDamageHandlerResponse = {
  amount: number;
  isCritical: boolean;
};

export type WeaponTarget =
  | { type: "single"; dmgMultiplier: 1 }
  | { type: "multiple"; targets: number; dmgMultiplier: number }
  | { type: "random"; targets: number; dmgMultiplier: number };

export class PlayerCalculateDamageHandler {
  static handle(
    player: Player,
    enemyResistance: number,
    overridedmgMultiplier?: number,
  ): PlayerCalculateDamageHandlerResponse {
    const weapon = ItemGetByIdHandler.handle<Weapon>(player.selectedWeapon);

    const isCritical = Math.random() < player.ctr;
    const baseDamage = weapon.dmg * (1 + player.dmg);
    const criticaldmgMultiplier = 1.5;

    const rawDamage = isCritical
      ? baseDamage * criticaldmgMultiplier
      : baseDamage;

    const dmgMultiplier =
      overridedmgMultiplier ?? weapon.target?.dmgMultiplier ?? 1;

    const reducedDamage = Math.max(
      Math.floor(rawDamage * dmgMultiplier * (1 - enemyResistance)),
      1,
    );

    return {
      amount: reducedDamage,
      isCritical,
    };
  }
}
