import blindLightPicture from "@resources/images/skills/blind-light.png";
import doubleShotPicture from "@resources/images/skills/double-shot.png";
import precisionShotPicture from "@resources/images/skills/precision-shot.png";

import type { Skill } from "./types/index.type";

export const SKILLS: Skill[] = [
  {
    id: "double-shot",
    behavior: "attack",
    name: "Double Shot",
    description: "You shoot twice. The second shot deals less damage.",
    picture: doubleShotPicture,
    cost: 25,
    cooldown: 3,
    price: 350,
    effect: {
      hits: 2,
      penalty: 0.5,
    },
  },
  {
    id: "precision-shot",
    behavior: "attack",
    name: "Precision Shot",
    description: "A precise shot that deals double damage.",
    picture: precisionShotPicture,
    cost: 20,
    cooldown: 3,
    price: 600,
    effect: {
      multiplier: 2,
    },
  },
  {
    id: "blind-light",
    behavior: "effect",
    name: "Blind Light",
    description: "Blinds all enemies for 1 turn.",
    picture: blindLightPicture,
    cost: 50,
    cooldown: 3,
    price: 450,
    effect: {
      duration: 1,
    },
  },
];
