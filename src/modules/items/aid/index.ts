import highHpRecoveryPic from "@resources/images/aid/high-hp-recovery.png";
import mediumHpRecoveryPic from "@resources/images/aid/medium-hp-recovery.png";
import minorHpRecoveryPic from "@resources/images/aid/minor-hp-recovery.png";

import type { Aid } from "./types/index.type";

export const AIDS: Aid[] = [
  {
    type: "hp-restore",
    name: "Health Shot",
    description:
      "A quick-use injection that restores a small amount of HP instantly. Useful in emergencies.",
    picture: minorHpRecoveryPic,
    potency: "low",
  },
  {
    type: "hp-restore",
    name: "Blood Transfusion Pack",
    description:
      "A portable blood bag that restores a moderate amount of HP. Takes a moment to apply.",
    picture: mediumHpRecoveryPic,
    potency: "mid",
  },
  {
    type: "hp-restore",
    name: "Medical Field Kit",
    description:
      "A full medical kit capable of restoring a large portion of HP. Best used when safe.",
    picture: highHpRecoveryPic,
    potency: "high",
  },
];
