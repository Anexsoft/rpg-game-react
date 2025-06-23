import { WEAPONS } from "@weapons/index";
import type { Weapon } from "@weapons/types/index.type";

import { ARMORS } from "@armor/index";
import type { Armor } from "@armor/types/index.type";

import { CONSUMABLES } from "@consumables/index";
import type { Consumable } from "@consumables/types/index.type";

import type { ItemType } from "../types/index.type";

type ItemTypeMap = {
  [K in ItemType]: K extends "armor"
    ? Armor
    : K extends "weapon"
      ? Weapon
      : K extends "consumable"
        ? Consumable
        : never;
};

export class ItemGetByIdHandler {
  static handle<T extends keyof ItemTypeMap>(
    type: T,
    id: string,
  ): ItemTypeMap[T] {
    if (type === "armor") {
      const item = ARMORS.find((a) => a.id === id);
      if (!item) throw new Error(`Armor with id "${id}" not found`);
      return item as ItemTypeMap[T];
    }

    if (type === "weapon") {
      const item = WEAPONS.find((w) => w.id === id);
      if (!item) throw new Error(`Weapon with id "${id}" not found`);
      return item as ItemTypeMap[T];
    }

    if (type === "consumable") {
      const item = CONSUMABLES.find((c) => c.id === id);
      if (!item) throw new Error(`Consumable with id "${id}" not found`);
      return item as ItemTypeMap[T];
    }

    throw new Error(`Unknown item type: ${type}`);
  }
}
