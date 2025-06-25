import highHpRecoveryPic from "@resources/images/consumables/high-hp-recovery.png";
import mediumHpRecoveryPic from "@resources/images/consumables/medium-hp-recovery.png";
import minorHpRecoveryPic from "@resources/images/consumables/minor-hp-recovery.png";

import type { Consumable } from "./types/index.type";

export const CONSUMABLES: Consumable[] = [
  {
    level: 0,
    type: "healing",
    id: "health-shot",
    name: "Health Shot",
    description: "Quick injection restoring a small amount of HP.",
    picture: minorHpRecoveryPic,
    restoreRate: 0.3,
    price: 50,
    rarity: "standard",
  },
  {
    level: 0,
    type: "healing",
    id: "blood-transfusion-pack",
    name: "Blood Transfusion Pack",
    description: "Portable blood bag restoring moderate HP.",
    picture: mediumHpRecoveryPic,
    restoreRate: 0.5,
    price: 150,
    rarity: "standard",
  },
  {
    level: 0,
    type: "healing",
    id: "medical-field-kit",
    name: "Medical Field Kit",
    description: "Full kit restoring a large portion of HP.",
    picture: highHpRecoveryPic,
    restoreRate: 0.8,
    price: 300,
    rarity: "standard",
  },
];
