export type AidType = "hp-restore";

export type AidPotency = "low" | "mid" | "high";

export type Aid = {
  type: AidType;
  potency: AidPotency;
  name: string;
  description: string;
  picture: string;
};
