import doctorZombie1 from "@resources/images/enemies/avatars/doctor-zombie-1.jpg";
import dogZombie1 from "@resources/images/enemies/avatars/dog-zombie-1.jpg";
import femaleZombie1 from "@resources/images/enemies/avatars/female-zombie-1.jpg";
import maleZombie1 from "@resources/images/enemies/avatars/male-zombie-1.jpg";
import maleZombie2 from "@resources/images/enemies/avatars/male-zombie-2.jpg";
import nurseZombie1 from "@resources/images/enemies/avatars/nurse-zombie-1.jpg";
import policeZombie1 from "@resources/images/enemies/avatars/police-zombie-1.jpg";
import raptor1 from "@resources/images/enemies/avatars/raptor-1.jpg";
import stalker1 from "@resources/images/enemies/avatars/stalker-1.jpg";
import titan1 from "@resources/images/enemies/avatars/titan-1.jpg";
import apocalipsis1 from "@resources/images/enemies/avatars/apocalipsis-1.png";

import { EnemyCreateHandler } from "./handlers/enemy-create.handler";
import type { EnemyBase } from "./types/base.type";
import type { EnemyId } from "./types/ids.type";
import type { Enemy } from "./types/index.type";

export function generateEnemies(ids: EnemyId[]): Enemy[] {
  const enemies = ids.map((id) => {
    return EnemyCreateHandler.handle(id);
  });

  return enemies.sort(() => Math.random() - 0.5);
}

export const ENEMIES: EnemyBase[] = [
  {
    id: "female-zombie-1",
    name: "Female Zombie",
    description: "A twitchy infected female. Agile but fragile.",
    dmg: 6,
    hp: 18,
    res: 0.01,
    ctr: 0.01,
    picture: femaleZombie1,
    level: [1, 5],
    expGiven: [5, 8],
    goldGiven: [3, 6],
  },
  {
    id: "male-zombie-1",
    name: "Male Zombie",
    description:
      "A strong but decaying male zombie. Slow, yet dangerous up close.",
    dmg: 7,
    hp: 22,
    res: 0.01,
    ctr: 0.01,
    picture: maleZombie1,
    level: [1, 5],
    expGiven: [5, 8],
    goldGiven: [4, 7],
  },
  {
    id: "male-zombie-2",
    name: "Male Zombie",
    description:
      "Lumbers forward with heavy steps. Hard to kill, but easy to avoid.",
    dmg: 5,
    hp: 26,
    res: 0.01,
    ctr: 0.01,
    picture: maleZombie2,
    level: [1, 5],
    expGiven: [5, 8],
    goldGiven: [3, 6],
  },
  {
    id: "police-zombie-1",
    name: "Cop Zombie",
    description:
      "Once a police officer, wears armor making it harder to bring down.",
    dmg: 6,
    hp: 28,
    res: 0.01,
    ctr: 0.01,
    picture: policeZombie1,
    level: [1, 5],
    expGiven: [6, 9],
    goldGiven: [5, 8],
  },
  {
    id: "doctor-zombie-1",
    name: "Doctor Zombie",
    description: "Erratic movements and occasional access to healing items.",
    dmg: 6,
    hp: 20,
    res: 0.02,
    ctr: 0.02,
    picture: doctorZombie1,
    level: [1, 5],
    expGiven: [6, 10],
    goldGiven: [6, 10],
  },
  {
    id: "nurse-zombie-1",
    name: "Nurse Zombie",
    description: "Fast and unpredictable. Sometimes carries healing items.",
    dmg: 6,
    hp: 19,
    res: 0.03,
    ctr: 0.02,
    picture: nurseZombie1,
    level: [1, 5],
    expGiven: [6, 10],
    goldGiven: [6, 10],
  },
  {
    id: "dog-zombie-1",
    name: "Zombie Dog",
    description: "Fast, vicious, and hard to hit. Attacks in sudden bursts.",
    dmg: 9,
    hp: 15,
    res: 0.01,
    ctr: 0.05,
    picture: dogZombie1,
    level: [1, 5],
    expGiven: [8, 12],
    goldGiven: [7, 12],
  },
  {
    id: "raptor-1",
    name: "Raptor",
    description: "A mutated creature with enhanced speed and reflexes.",
    dmg: 11,
    hp: 36,
    res: 0.04,
    ctr: 0.08,
    picture: raptor1,
    level: [1, 5],
    expGiven: [10, 15],
    goldGiven: [10, 14],
  },
  {
    id: "stalker-1",
    name: "Stalker",
    description:
      "A stealthy and intelligent enemy. Strikes with lethal precision.",
    dmg: 12,
    hp: 40,
    res: 0.08,
    ctr: 0.04,
    picture: stalker1,
    level: [1, 5],
    expGiven: [11, 16],
    goldGiven: [10, 15],
  },
  {
    id: "titan-1",
    name: "Titan",
    description:
      "A towering monstrosity. Extremely resilient and hits like a truck.",
    dmg: 22,
    hp: 100,
    res: 0.15,
    ctr: 0.1,
    picture: titan1,
    level: [1, 5],
    expGiven: [20, 30],
    goldGiven: [20, 30],
  },
  {
    id: "apocalipsis-1",
    name: "Apocalipsis",
    description:
      "The ultimate force of destruction. Its presence alone signals the end. Nearly impossible to defeat.",
    dmg: 35,
    hp: 180,
    res: 0.35,
    ctr: 0.2,
    picture: apocalipsis1,
    level: [1, 5],
    expGiven: [50, 100],
    goldGiven: [50, 100],
  },
];
