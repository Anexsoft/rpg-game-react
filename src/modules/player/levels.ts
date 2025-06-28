import { DIFFICULTY } from "@core/config";

type LevelRange = Record<number, [number, number]>;

function adjustLevels(levels: LevelRange, difficulty: string): LevelRange {
  const factors: Record<string, number> = {
    "very easy": 0.5,
    easy: 0.75,
    normal: 1,
    hard: 1.25,
    extreme: 1.5,
  };

  const factor = factors[difficulty] ?? 1;
  const adjusted: LevelRange = {};

  const levelEntries = Object.entries(levels)
    .map(([key, range]) => [Number(key), range] as [number, [number, number]])
    .sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < levelEntries.length; i++) {
    const [level, [originalMin, originalMax]] = levelEntries[i];

    if (i === 0) {
      const adjustedMax = Math.round(originalMax * factor);
      adjusted[level] = [originalMin, adjustedMax];
    } else {
      const prevLevel = levelEntries[i - 1][0];
      const prevMax = adjusted[prevLevel][1];
      const rangeSize = originalMax - originalMin;
      const newMin = prevMax + 1;
      const newMax = Math.round(newMin + rangeSize * factor);
      adjusted[level] = [newMin, newMax];
    }
  }

  return adjusted;
}

export const LEVELS = adjustLevels(
  {
    1: [0, 50],
    2: [51, 90],
    3: [91, 140],
    4: [141, 200],
    5: [201, 270],
    6: [271, 350],
    7: [351, 440],
    8: [441, 540],
    9: [541, 650],
    10: [651, 770],
    11: [771, 900],
    12: [901, 1040],
    13: [1041, 1190],
    14: [1191, 1350],
    15: [1351, 1520],
    16: [1521, 1700],
    17: [1701, 1890],
    18: [1891, 2090],
    19: [2091, 2300],
    20: [2301, 2520],
    21: [2521, 2750],
    22: [2751, 2990],
    23: [2991, 3240],
    24: [3241, 3500],
    25: [3501, 3770],
    26: [3771, 4050],
    27: [4051, 4340],
    28: [4341, 4640],
    29: [4641, 4950],
    30: [4951, 5270],
    31: [5271, 5600],
    32: [5601, 5940],
    33: [5941, 6290],
    34: [6291, 6650],
    35: [6651, 7020],
    36: [7021, 7400],
    37: [7401, 7790],
    38: [7791, 8190],
    39: [8191, 8600],
    40: [8601, 9020],
    41: [9021, 9450],
    42: [9451, 9890],
    43: [9891, 10340],
    44: [10341, 10800],
    45: [10801, 11270],
    46: [11271, 11750],
    47: [11751, 12240],
    48: [12241, 12740],
    50: [13251, 13770],
  },
  DIFFICULTY,
);

export const MAX_LEVEL = Math.max(...Object.keys(LEVELS).map(Number));
