import femaleAvatar from "@resources/images/player/avatars/female.png";
import maleAvatar from "@resources/images/player/avatars/male.png";

export function getPlayerAvatar(gender: string) {
  if (gender === "male") {
    return maleAvatar;
  }

  return femaleAvatar;
}
