import type { ItemReward } from "../items/types/index.type";

import type { ZoneId } from "./types/ids.types";

export const REWARDS: Record<ZoneId, ItemReward[]> = {
  training: [
    { type: "consumable", id: "health-shot", prob: 0.45 },
    { type: "weapon", id: "9mm-semi-automatic-handgun", prob: 0.1 },
    { type: "weapon", id: "remington-870-pump-action-shotgun", prob: 0.05 },
  ],

  outskirts: [
    { type: "consumable", id: "health-shot", prob: 0.45 },
    { type: "consumable", id: "blood-transfusion-pack", prob: 0.2 },
    { type: "weapon", id: "9mm-semi-automatic-handgun+1", prob: 0.1 },
  ],

  residential: [
    { type: "consumable", id: "health-shot", prob: 0.45 },
    { type: "consumable", id: "blood-transfusion-pack", prob: 0.2 },
    { type: "weapon", id: "9mm-semi-automatic-handgun+1", prob: 0.1 },
    { type: "weapon", id: "remington-870-pump-action-shotgun+1", prob: 0.05 },
    { type: "armor", id: "leather-jacket+1", prob: 0.05 },
    { type: "armor", id: "body-guard-vest+1", prob: 0.05 },
  ],

  hospital: [
    { type: "consumable", id: "health-shot", prob: 0.4 },
    { type: "consumable", id: "blood-transfusion-pack", prob: 0.25 },
    { type: "consumable", id: "medical-field-kit", prob: 0.1 },
    { type: "weapon", id: "9mm-semi-automatic-handgun+2", prob: 0.1 },
    { type: "weapon", id: "remington-870-pump-action-shotgun+2", prob: 0.05 },
    { type: "armor", id: "leather-jacket+2", prob: 0.05 },
  ],

  university: [
    { type: "consumable", id: "health-shot", prob: 0.35 },
    { type: "consumable", id: "blood-transfusion-pack", prob: 0.25 },
    { type: "consumable", id: "medical-field-kit", prob: 0.1 },
    { type: "weapon", id: "9mm-semi-automatic-handgun+3", prob: 0.1 },
    { type: "weapon", id: "remington-870-pump-action-shotgun+3", prob: 0.05 },
    { type: "armor", id: "body-guard-vest+2", prob: 0.05 },
  ],

  factory: [
    { type: "consumable", id: "health-shot", prob: 0.3 },
    { type: "consumable", id: "blood-transfusion-pack", prob: 0.2 },
    { type: "consumable", id: "medical-field-kit", prob: 0.1 },
    { type: "weapon", id: "9mm-semi-automatic-handgun+4", prob: 0.1 },
    { type: "weapon", id: "remington-870-pump-action-shotgun+4", prob: 0.05 },
    { type: "armor", id: "leather-jacket+3", prob: 0.05 },
    { type: "armor", id: "body-guard-vest+3", prob: 0.05 },
  ],

  labs: [
    { type: "consumable", id: "health-shot", prob: 0.25 },
    { type: "consumable", id: "blood-transfusion-pack", prob: 0.2 },
    { type: "consumable", id: "medical-field-kit", prob: 0.1 },
    { type: "weapon", id: "9mm-semi-automatic-handgun+5", prob: 0.1 },
    { type: "weapon", id: "remington-870-pump-action-shotgun+5", prob: 0.05 },
    { type: "armor", id: "leather-jacket+3", prob: 0.05 },
    { type: "armor", id: "body-guard-vest+3", prob: 0.05 },
  ],
};
