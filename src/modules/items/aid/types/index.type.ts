import type { AidId } from "./ids.types";

export type AidType = "hp-restore";

export type AidPotency = "low" | "mid" | "high";

export type Aid = {
  id: AidId;
  type: AidType;
  potency: AidPotency;
  name: string;
  description: string;
  picture: string;
};
