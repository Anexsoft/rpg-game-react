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
    cost: 35,
    cooldown: 2,
    price: 600,
    effect: {
      hits: 2,
    },
  },
  {
    id: "precision-shot",
    behavior: "attack",
    name: "Precision Shot",
    description: "A precise shot that causes bleeding by 3 turns.",
    picture: precisionShotPicture,
    cost: 35,
    cooldown: 2,
    price: 500,
    effect: {
      duration: 3,
      penaltyHpRate: 0.4,
    },
  },
  {
    id: "blind-light",
    behavior: "effect",
    name: "Blind Light",
    description: "Blinds all enemies for 1 turn.",
    picture: blindLightPicture,
    cost: 15,
    cooldown: 2,
    price: 450,
    effect: {
      duration: 1,
    },
  },
];
