import experimentRoomBg from "@resources/images/scenes/zone_experiment_room.png";
import factoryBg from "@resources/images/scenes/zone_factory.jpg";
import hospitalBg from "@resources/images/scenes/zone_hospital.jpg";
import labsBg from "@resources/images/scenes/zone_laboratory.jpg";
import outskirtsBg from "@resources/images/scenes/zone_outskirts.jpg";
import residentialBg from "@resources/images/scenes/zone_residential.jpg";
import trainingBg from "@resources/images/scenes/zone_training.jpg";
import universityBg from "@resources/images/scenes/zone_university.jpg";

import {
  ZONE_0_PATH,
  ZONE_1_PATH,
  ZONE_2_PATH,
  ZONE_3_PATH,
  ZONE_4_PATH,
  ZONE_5_PATH,
  ZONE_6_PATH,
  ZONE_7_PATH,
} from "@src/router.defs";

import type { Zone } from "./types/index.type";

export const ZONES: Zone[] = [
  {
    id: "training",
    name: "Training",
    description:
      "A controlled environment for new recruits to hone their skills before facing real danger.",
    background: trainingBg,
    path: ZONE_0_PATH,
    enemies: ["police-zombie-1"],
  },
  {
    id: "outskirts",
    name: "Outskirts",
    description:
      "The outer perimeter of the fortress. Tense and patrolled, but still dangerous.",
    background: outskirtsBg,
    path: ZONE_1_PATH,
    enemies: ["male-zombie-1", "police-zombie-1", "female-zombie-1"],
  },
  {
    id: "residential",
    name: "Residential Area",
    description:
      "Once a peaceful neighborhood. Now a hollow shell crawling with infected.",
    background: residentialBg,
    path: ZONE_2_PATH,
    enemies: [
      "male-zombie-1",
      "police-zombie-1",
      "female-zombie-1",
      "dog-zombie-1",
    ],
  },
  {
    id: "hospital",
    name: "Abandoned Hospital",
    description:
      "Collapsed floors and bloodied halls. Medical supplies may still be inside.",
    background: hospitalBg,
    path: ZONE_3_PATH,
    enemies: [
      "police-zombie-1",
      "doctor-zombie-1",
      "nurse-zombie-1",
      "stalker-1",
      "stalker-1",
    ],
  },
  {
    id: "university",
    name: "University Campus",
    description:
      "Dark lecture halls and silent libraries. Survivors say strange things roam here.",
    background: universityBg,
    path: ZONE_4_PATH,
    enemies: [
      "male-zombie-1",
      "male-zombie-2",
      "raptor-1",
      "raptor-1",
      "dog-zombie-1",
    ],
  },
  {
    id: "factory",
    name: "Old Factory",
    description:
      "Dusty machines and creaking steel. Something lurks beneath the surface.",
    background: factoryBg,
    path: ZONE_5_PATH,
    enemies: [
      "male-zombie-1",
      "male-zombie-2",
      "police-zombie-1",
      "female-zombie-1",
      "stalker-1",
      "raptor-1",
      "dog-zombie-1",
    ],
  },
  {
    id: "labs",
    name: "BioTech Labs",
    description:
      "Secured labs with corrupted data and failed experiments. The origin of the outbreak?",
    background: labsBg,
    path: ZONE_6_PATH,
    enemies: [
      "stalker-1",
      "raptor-1",
      "stalker-1",
      "raptor-1",
      "titan-1",
      "dog-zombie-1",
      "dog-zombie-1",
    ],
  },
  {
    id: "experiment-room",
    name: "Experiment Room",
    description:
      "The deepest section of the labs. Blood-soaked floors, shattered glass, and evidence of unspeakable experiments. Something monstrous was born here.",
    background: experimentRoomBg,
    path: ZONE_7_PATH,
    enemies: [
      "stalker-1",
      "raptor-1",
      "stalker-1",
      "raptor-1",
      "titan-1",
      "titan-1",
      "apocalipsis-1",
    ],
  },
];
