import type { EnemyId } from "./ids.type";

export type EnemyBase = {
  id: EnemyId;
  name: string;
  description: string;
  hp: number;
  dmg: number;
  eva: number;
  ctr: number;
  level: [number, number];
  expGiven: [number, number];
  goldGiven: [number, number];
  picture: string;
};
