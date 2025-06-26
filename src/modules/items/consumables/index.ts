import highHpRecoveryPic from "@resources/images/consumables/high-hp-recovery.png";
import highStaminaRecoveryPic from "@resources/images/consumables/high-stamina-recovery.png";
import mediumHpRecoveryPic from "@resources/images/consumables/medium-hp-recovery.png";
import mediumStaminaRecoveryPic from "@resources/images/consumables/medium-stamina-recovery.png";
import minorHpRecoveryPic from "@resources/images/consumables/minor-hp-recovery.png";
import minorStaminaRecoveryPic from "@resources/images/consumables/minor-stamina-recovery.png";

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
  {
    level: 0,
    type: "stamina",
    id: "stamina-pill",
    name: "Stamina Pill",
    description:
      "A small pill that slightly restores stamina. Basic but effective.",
    picture: minorStaminaRecoveryPic,
    restoreRate: 0.3,
    price: 80,
    rarity: "standard",
  },
  {
    level: 0,
    type: "stamina",
    id: "vitaboost-tube",
    name: "Vitaboost Tube",
    description: "A compact vitamin-style tube that restores moderate stamina.",
    picture: mediumStaminaRecoveryPic,
    restoreRate: 0.5,
    price: 200,
    rarity: "standard",
  },
  {
    level: 0,
    type: "stamina",
    id: "adrenaline-shot",
    name: "Adrenaline Shot",
    description:
      "A high-potency injection that restores a large portion of stamina instantly.",
    picture: highStaminaRecoveryPic,
    restoreRate: 0.8,
    price: 400,
    rarity: "standard",
  },
];
