export type StatProfileName = "agile" | "balanced" | "tank";

type StatProfile = {
  name: string;
  description: string;
  stats: {
    STR: number;
    VIT: number;
    NRG: number;
    DEX: number;
    LUK: number;
  };
};

export const STAT_PROFILES: Record<StatProfileName, StatProfile> = {
  agile: {
    name: "Agile",
    description: "Focused on dexterity and luck. Great for dodging and crits.",
    stats: {
      STR: 5,
      VIT: 5,
      NRG: 5,
      DEX: 8,
      LUK: 12,
    },
  },

  balanced: {
    name: "Balanced",
    description: "Well-rounded stats for any situation.",
    stats: {
      STR: 7,
      VIT: 7,
      NRG: 7,
      DEX: 7,
      LUK: 7,
    },
  },

  tank: {
    name: "Tank",
    description: "Built to survive with high strength and vitality.",
    stats: {
      STR: 10,
      VIT: 10,
      NRG: 5,
      DEX: 5,
      LUK: 5,
    },
  },
};
