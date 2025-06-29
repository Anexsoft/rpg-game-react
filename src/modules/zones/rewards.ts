import type { ItemReward } from "../items/types/index.type";

import type { ZoneId } from "./types/ids.types";

export const REWARDS: Record<ZoneId, ItemReward[]> = {
  training: [
    { type: "consumable", id: "health-shot", prob: 0.2 },
    { type: "consumable", id: "stamina-pill", prob: 0.1 },
    { type: "weapon", id: "9mm-semi-automatic-handgun", prob: 0.05 },
    { type: "weapon", id: "remington-870-pump-action-shotgun", prob: 0.03 },
    { type: "weapon", id: "uzi", prob: 0.03 },
    { type: "armor", id: "leather-jacket", prob: 0.03 },
    { type: "armor", id: "body-guard-vest", prob: 0.03 },
  ],

  outskirts: [
    { type: "consumable", id: "health-shot", prob: 0.25 },
    { type: "consumable", id: "blood-transfusion-pack", prob: 0.15 },
    { type: "consumable", id: "stamina-pill", prob: 0.1 },
    { type: "weapon", id: "9mm-semi-automatic-handgun+1", prob: 0.06 },
    { type: "weapon", id: "remington-870-pump-action-shotgun+1", prob: 0.04 },
    { type: "weapon", id: "uzi+1", prob: 0.04 },
    { type: "weapon", id: "spas-12", prob: 0.03 },
    { type: "weapon", id: "mp5", prob: 0.03 },
    { type: "armor", id: "leather-jacket+1", prob: 0.04 },
    { type: "armor", id: "body-guard-vest+1", prob: 0.04 },
  ],

  residential: [
    { type: "consumable", id: "health-shot", prob: 0.3 },
    { type: "consumable", id: "blood-transfusion-pack", prob: 0.2 },
    { type: "consumable", id: "stamina-pill", prob: 0.1 },
    { type: "weapon", id: "9mm-semi-automatic-handgun+2", prob: 0.07 },
    { type: "weapon", id: "remington-870-pump-action-shotgun+2", prob: 0.05 },
    { type: "weapon", id: "uzi+2", prob: 0.05 },
    { type: "weapon", id: "spas-12+1", prob: 0.04 },
    { type: "weapon", id: "mp5+1", prob: 0.03 },
    { type: "weapon", id: "desert-eagle", prob: 0.03 },
    { type: "armor", id: "leather-jacket+2", prob: 0.05 },
    { type: "armor", id: "body-guard-vest+2", prob: 0.05 },
    { type: "armor", id: "advanced-armor", prob: 0.02 },
  ],

  hospital: [
    { type: "consumable", id: "health-shot", prob: 0.35 },
    { type: "consumable", id: "blood-transfusion-pack", prob: 0.2 },
    { type: "consumable", id: "medical-field-kit", prob: 0.1 },
    { type: "consumable", id: "stamina-pill", prob: 0.1 },
    { type: "weapon", id: "9mm-semi-automatic-handgun+3", prob: 0.07 },
    { type: "weapon", id: "remington-870-pump-action-shotgun+3", prob: 0.05 },
    { type: "weapon", id: "uzi+3", prob: 0.05 },
    { type: "weapon", id: "spas-12+2", prob: 0.04 },
    { type: "weapon", id: "mp5+2", prob: 0.04 },
    { type: "weapon", id: "desert-eagle+1", prob: 0.05 },
    { type: "armor", id: "advanced-armor+1", prob: 0.04 },
  ],

  university: [
    { type: "consumable", id: "health-shot", prob: 0.4 },
    { type: "consumable", id: "blood-transfusion-pack", prob: 0.25 },
    { type: "consumable", id: "medical-field-kit", prob: 0.1 },
    { type: "consumable", id: "vitaboost-tube", prob: 0.1 },
    { type: "weapon", id: "remington-870-pump-action-shotgun+4", prob: 0.06 },
    { type: "weapon", id: "uzi+4", prob: 0.06 },
    { type: "weapon", id: "spas-12+3", prob: 0.05 },
    { type: "weapon", id: "mp5+3", prob: 0.05 },
    { type: "weapon", id: "desert-eagle+2", prob: 0.05 },
    { type: "armor", id: "advanced-armor+2", prob: 0.03 },
  ],

  factory: [
    { type: "consumable", id: "health-shot", prob: 0.45 },
    { type: "consumable", id: "blood-transfusion-pack", prob: 0.3 },
    { type: "consumable", id: "medical-field-kit", prob: 0.15 },
    { type: "consumable", id: "vitaboost-tube", prob: 0.1 },
    { type: "weapon", id: "9mm-semi-automatic-handgun+4", prob: 0.06 },
    { type: "weapon", id: "uzi+4", prob: 0.06 },
    { type: "weapon", id: "spas-12+4", prob: 0.05 },
    { type: "weapon", id: "mp5+4", prob: 0.05 },
    { type: "weapon", id: "desert-eagle+3", prob: 0.04 },
    { type: "armor", id: "leather-jacket+3", prob: 0.05 },
    { type: "armor", id: "body-guard-vest+3", prob: 0.05 },
    { type: "armor", id: "advanced-armor+2", prob: 0.04 },
  ],

  labs: [
    { type: "consumable", id: "health-shot", prob: 0.5 },
    { type: "consumable", id: "blood-transfusion-pack", prob: 0.4 },
    { type: "consumable", id: "medical-field-kit", prob: 0.2 },
    { type: "consumable", id: "adrenaline-shot", prob: 0.15 },
    { type: "weapon", id: "9mm-semi-automatic-handgun+5", prob: 0.08 },
    { type: "weapon", id: "remington-870-pump-action-shotgun+5", prob: 0.07 },
    { type: "weapon", id: "uzi+5", prob: 0.07 },
    { type: "weapon", id: "spas-12+5", prob: 0.06 },
    { type: "weapon", id: "mp5+5", prob: 0.06 },
    { type: "weapon", id: "desert-eagle+4", prob: 0.07 },
    { type: "weapon", id: "desert-eagle+5", prob: 0.04 },
    { type: "armor", id: "advanced-armor+3", prob: 0.05 },
  ],

  "experiment-room": [
    { type: "consumable", id: "medical-field-kit", prob: 0.5 },
    { type: "consumable", id: "adrenaline-shot", prob: 0.5 },
    { type: "weapon", id: "9mm-semi-automatic-handgun+5", prob: 0.7 },
    { type: "weapon", id: "remington-870-pump-action-shotgun+5", prob: 0.7 },
    { type: "weapon", id: "uzi+5", prob: 0.7 },
    { type: "weapon", id: "spas-12+5", prob: 0.7 },
    { type: "weapon", id: "mp5+5", prob: 0.7 },
    { type: "weapon", id: "desert-eagle+4", prob: 0.45 },
    { type: "weapon", id: "desert-eagle+5", prob: 0.45 },
    { type: "armor", id: "advanced-armor+3", prob: 0.3 },
  ],
};
