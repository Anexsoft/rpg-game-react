import femaleAvatar from "@resources/images/player/avatars/female.png";
import maleAvatar from "@resources/images/player/avatars/male.png";

import { LEVELS, MAX_LEVEL } from "@player/levels";

export function getPlayerAvatar(gender: string) {
  if (gender === "male") {
    return maleAvatar;
  }

  return femaleAvatar;
}

export function calculatePlayerExpProgress(level: number, currentExp: number) {
  if (level === MAX_LEVEL) return 1;

  const [min, max] = LEVELS[level - 1];
  let progress: number;

  if (level === 1) {
    progress = currentExp / max;
  } else {
    progress = (currentExp - min) / (max - min);
  }

  return parseFloat(Math.max(0, Math.min(progress, 1)).toFixed(2));
}
