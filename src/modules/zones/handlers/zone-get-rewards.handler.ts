import type { ItemReward } from "@src/modules/items/types/index.type";

import { REWARDS } from "../rewards";
import type { ZoneId } from "../types/ids.types";

export class ZoneGetRewardsHandler {
  static handle(zoneId: ZoneId): ItemReward[] {
    return REWARDS[zoneId].filter((reward) => Math.random() < reward.prob);
  }
}
