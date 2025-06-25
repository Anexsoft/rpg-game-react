import { DIFFICULTY } from "@core/config";

type LevelRange = [number, number];

function adjustLevels(levels: LevelRange[], difficulty: string): LevelRange[] {
  const factors: Record<string, number> = {
    "very easy": 0.25,
    easy: 0.75,
    normal: 1,
    hard: 1.25,
    extreme: 1.5,
  };

  const factor = factors[difficulty] ?? 1;

  const adjusted: LevelRange[] = [];

  for (let i = 0; i < levels.length; i++) {
    const [originalMin, originalMax] = levels[i];

    if (i === 0) {
      const adjustedMax = Math.round(originalMax * factor);
      adjusted.push([originalMin, adjustedMax]);
    } else {
      const prevMax = adjusted[i - 1][1];
      const rangeSize = originalMax - originalMin;
      const newMin = prevMax + 1;
      const newMax = Math.round(newMin + rangeSize * factor);
      adjusted.push([newMin, newMax]);
    }
  }

  return adjusted;
}

export const LEVELS = adjustLevels(
  [
    [0, 20],
    [21, 50],
    [51, 90],
    [91, 140],
    [141, 200],
    [201, 270],
    [271, 350],
    [351, 440],
    [441, 540],
    [541, 650],
    [651, 770],
    [771, 900],
    [901, 1040],
    [1041, 1190],
    [1191, 1350],
    [1351, 1520],
    [1521, 1700],
    [1701, 1890],
    [1891, 2090],
    [2091, 2300],
    [2301, 2520],
    [2521, 2750],
    [2751, 2990],
    [2991, 3240],
    [3241, 3500],
    [3501, 3770],
    [3771, 4050],
    [4051, 4340],
    [4341, 4640],
    [4641, 4950],
    [4951, 5270],
    [5271, 5600],
    [5601, 5940],
    [5941, 6290],
    [6291, 6650],
    [6651, 7020],
    [7021, 7400],
    [7401, 7790],
    [7791, 8190],
    [8191, 8600],
    [8601, 9020],
    [9021, 9450],
    [9451, 9890],
    [9891, 10340],
    [10341, 10800],
    [10801, 11270],
    [11271, 11750],
    [11751, 12240],
    [12241, 12740],
    [12741, 13250],
  ],
  DIFFICULTY
);

export const MAX_LEVEL = LEVELS.length;
