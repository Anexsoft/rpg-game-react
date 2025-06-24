import highHpRecoveryPic from "@resources/images/consumables/high-hp-recovery.png";
import mediumHpRecoveryPic from "@resources/images/consumables/medium-hp-recovery.png";
import minorHpRecoveryPic from "@resources/images/consumables/minor-hp-recovery.png";

import type { Consumable } from "./types/index.type";

export const CONSUMABLES: Consumable[] = [
  {
    id: "health-shot",
    type: "healing",
    name: "Health Shot",
    description: "Quick injection restoring a small amount of HP.",
    picture: minorHpRecoveryPic,
    restoreRate: 0.3,
  },
  {
    id: "blood-transfusion-pack",
    type: "healing",
    name: "Blood Transfusion Pack",
    description: "Portable blood bag restoring moderate HP.",
    picture: mediumHpRecoveryPic,
    restoreRate: 0.45,
  },
  {
    id: "medical-field-kit",
    type: "healing",
    name: "Medical Field Kit",
    description: "Full kit restoring a large portion of HP.",
    picture: highHpRecoveryPic,
    restoreRate: 0.8,
  },
];
