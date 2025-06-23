import type { EnemyId } from "./ids.type";

export type EnemyBase = {
  id: EnemyId;
  name: string;
  description: string;
  hp: number;
  dmg: number;
  res: number;
  ctr: number;
  level: [number, number];
  picture: string;

  expGiven: [number, number];
  goldGiven: [number, number];
};
