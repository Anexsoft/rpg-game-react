import { TAVERN_KEEPER_NAME } from "@npc/defs/names";

import drunkAvatar1 from "@resources/images/npc/avatars/drunk-1.png";
import dwarfAvatar1 from "@resources/images/npc/avatars/dwarf-1.png";
import prostituteAvatarOld1 from "@resources/images/npc/avatars/prostitute-old-1.png";
import prostituteAvatarYoung1 from "@resources/images/npc/avatars/prostitute-young-1.png";
import prostituteAvatarYoung2 from "@resources/images/npc/avatars/prostitute-young-2.png";
import tavernKeeperAvatar from "@resources/images/npc/avatars/tavern-keeper.png";

const DWARF_NAME = "Borin Stonebeard";
const DRUNK_NAME = "Old Jeb";
const PROSTITUTE_OLD_NAME = "Madam Lysa";
const PROSTITUTE_YOUNG1_NAME = "Sera";
const PROSTITUTE_YOUNG2_NAME = "Mira";

const TARVERN_KEEPER_DIALOGUES = [
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: "Welcome, traveler. Ale's fresh, stories are free.",
  },
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: "Careful who you trust here. Fancy a pint?",
  },
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: "If the walls could talk, they'd ask for a drink.",
  },
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: "Adventurers come and go, but the ale never runs dry.",
  },
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: "Keep your coin close and your secrets closer.",
  },
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: "The fireplace is warm, but the gossip is hotter.",
  },
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: "I've seen heroes rise and fall from this stool.",
  },
];

const DAWRF_DIALOGUES = [
  {
    name: DWARF_NAME,
    avatar: dwarfAvatar1,
    message: "Back in my day, goblins screamed! Pour me another.",
  },
  {
    name: DWARF_NAME,
    avatar: dwarfAvatar1,
    message:
      "I mined deep, saw things I'll never unsee. Toast to bad decisions!",
  },
];

const DRUNK_DIALOGUES = [
  {
    name: DRUNK_NAME,
    avatar: drunkAvatar1,
    message: "You ever talk to the floor? Listens better than my ex-wife.",
  },
  {
    name: DRUNK_NAME,
    avatar: drunkAvatar1,
    message:
      "Drank so much I woke up speaking Elvish. Still can't say 'hangover.'",
  },
];

const PROSTITUTE_OLD_DIALOGUES = [
  {
    name: PROSTITUTE_OLD_NAME,
    avatar: prostituteAvatarOld1,
    message: "You learn a lot listening at tavern corners.",
  },
  {
    name: PROSTITUTE_OLD_NAME,
    avatar: prostituteAvatarOld1,
    message: "Men come and go, but secrets stay.",
  },
];

const PROSTITUTE_YOUNG_1_DIALOGUES = [
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: "You've got that look... Want to forget for a night?",
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: "Care for a drink, or something stronger?",
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: "Some say the night is dangerous. What brings you here?",
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: "If you listen, you can hear secrets in laughter.",
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: "Not all smiles are honest, but mine can be.",
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: "I've seen heroes, villains, and fools. Which are you?",
  },
];

const PROSTITUTE_YOUNG_2_DIALOGUES = [
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: "The fire's warm... but I can warm you better.",
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: "You look tense. Let me help you unwind.",
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: "Not everyone here seeks trouble. Some just want to forget.",
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: "I've heard every secret this tavern holds.",
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: "The night is young, and so am I.",
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: "Sometimes a smile changes your luck. Let me be your charm.",
  },
];

export const TAVERN_DIALOGUES = [
  ...TARVERN_KEEPER_DIALOGUES,
  ...DAWRF_DIALOGUES,
  ...DRUNK_DIALOGUES,
  ...PROSTITUTE_OLD_DIALOGUES,
  ...PROSTITUTE_YOUNG_1_DIALOGUES,
  ...PROSTITUTE_YOUNG_2_DIALOGUES,
];
