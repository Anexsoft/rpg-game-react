import type { EnemyId } from "@enemy/types/ids.type";

import type { ZoneId } from "./ids.types";

export type Zone = {
  id: ZoneId;
  name: string;
  description: string;
  background: string;
  path: string;
  enemies: EnemyId[];
};
