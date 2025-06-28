import type { ConsumableType } from "@consumables/types/index.type";

import { ConsumableTypeOrder } from "../../shared/index";

export const sortByTypeAndRestoreRate = (
  a: { type: ConsumableType; restoreRate: number },
  b: { type: ConsumableType; restoreRate: number },
) => {
  const typeDiff = ConsumableTypeOrder[a.type] - ConsumableTypeOrder[b.type];

  if (typeDiff !== 0) {
    return typeDiff;
  }

  return b.restoreRate - a.restoreRate;
};
