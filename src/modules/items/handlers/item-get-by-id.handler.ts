import { WEAPONS } from "@weapons/index";
import type { Weapon } from "@weapons/types/index.type";

import { ARMORS } from "@armor/index";
import type { Armor } from "@armor/types/index.type";

import { CONSUMABLES } from "@consumables/index";
import type { Consumable } from "@consumables/types/index.type";

export class ItemGetByIdHandler {
  static handle<T extends Weapon | Armor | Consumable>(id: string): T {
    const item = [...ARMORS, ...WEAPONS, ...CONSUMABLES].find(
      (item) => item.id === id,
    );

    if (!item) {
      throw new Error(`Item with id "${id}" not found`);
    }

    return item as T;
  }
}
