import highHpRecoveryPic from "@resources/images/aid/high-hp-recovery.png";
import mediumHpRecoveryPic from "@resources/images/aid/medium-hp-recovery.png";
import minorHpRecoveryPic from "@resources/images/aid/minor-hp-recovery.png";

import type { Aid } from "./types/index.type";

export const AIDS: Aid[] = [
  {
    id: "health-shot",
    type: "hp-restore",
    name: "Health Shot",
    description: "Quick injection restoring a small amount of HP.",
    picture: minorHpRecoveryPic,
    potency: "low",
  },
  {
    id: "blood-transfusion-pack",
    type: "hp-restore",
    name: "Blood Transfusion Pack",
    description: "Portable blood bag restoring moderate HP.",
    picture: mediumHpRecoveryPic,
    potency: "mid",
  },
  {
    id: "medical-field-kit",
    type: "hp-restore",
    name: "Medical Field Kit",
    description: "Full kit restoring a large portion of HP.",
    picture: highHpRecoveryPic,
    potency: "high",
  },
];
