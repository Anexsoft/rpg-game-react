import drunkAvatar1 from "@resources/images/npc/avatars/drunk-1.png";
import prostituteAvatarOld1 from "@resources/images/npc/avatars/prostitute-old-1.png";
import prostituteAvatarYoung1 from "@resources/images/npc/avatars/prostitute-young-1.png";
import prostituteAvatarYoung2 from "@resources/images/npc/avatars/prostitute-young-2.png";
import unknowManAvatar1 from "@resources/images/npc/avatars/unknow-man-1.png";

import { NPC } from "@npc/index";

const UNKNOW_MAN_NAME = "Brian Walker";
const DRUNK_NAME = "Jack Miller";
const PROSTITUTE_OLD_NAME = "Linda Carter";
const PROSTITUTE_YOUNG1_NAME = "Ashley Brooks";
const PROSTITUTE_YOUNG2_NAME = "Megan Reed";

const TARVERN_KEEPER_DIALOGUES = [
  {
    name: NPC.BAR_KEEPER.name,
    avatar: NPC.BAR_KEEPER.avatar,
    message: "Welcome to the safe zone. Supplies are limited, hope is free.",
  },
  {
    name: NPC.BAR_KEEPER.name,
    avatar: NPC.BAR_KEEPER.avatar,
    message: "Watch your back out there. Want a can of beans?",
  },
  {
    name: NPC.BAR_KEEPER.name,
    avatar: NPC.BAR_KEEPER.avatar,
    message: "If these walls could talk, they'd scream for help.",
  },
  {
    name: NPC.BAR_KEEPER.name,
    avatar: NPC.BAR_KEEPER.avatar,
    message: "Survivors come and go, but the generator keeps running.",
  },
  {
    name: NPC.BAR_KEEPER.name,
    avatar: NPC.BAR_KEEPER.avatar,
    message: "Keep your gear close and your secrets closer.",
  },
  {
    name: NPC.BAR_KEEPER.name,
    avatar: NPC.BAR_KEEPER.avatar,
    message: "The fire's warm, but the rumors are hotter.",
  },
  {
    name: NPC.BAR_KEEPER.name,
    avatar: NPC.BAR_KEEPER.avatar,
    message: "I've seen heroes fall and walkers rise from this spot.",
  },
];

const DAWRF_DIALOGUES = [
  {
    name: UNKNOW_MAN_NAME,
    avatar: unknowManAvatar1,
    message:
      "Back before the outbreak, things were different. Pass me a drink.",
  },
  {
    name: UNKNOW_MAN_NAME,
    avatar: unknowManAvatar1,
    message:
      "I’ve seen things in the quarantine zone you wouldn’t believe. Cheers to bad choices.",
  },
];

const DRUNK_DIALOGUES = [
  {
    name: DRUNK_NAME,
    avatar: drunkAvatar1,
    message: "You ever talk to the wall? Listens better than my ex.",
  },
  {
    name: DRUNK_NAME,
    avatar: drunkAvatar1,
    message:
      "Drank so much I woke up thinking the zombies were gone. Still had a headache.",
  },
];

const PROSTITUTE_OLD_DIALOGUES = [
  {
    name: PROSTITUTE_OLD_NAME,
    avatar: prostituteAvatarOld1,
    message: "You hear a lot when you keep quiet in the shelter.",
  },
  {
    name: PROSTITUTE_OLD_NAME,
    avatar: prostituteAvatarOld1,
    message: "People come and go, but secrets stay locked down.",
  },
];

const PROSTITUTE_YOUNG_1_DIALOGUES = [
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: "You look tired... Want to forget the world for a night?",
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: "Need a drink, or something stronger to take the edge off?",
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: "Some say the city’s lost. What brings you here?",
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: "If you listen, you can hear secrets in the silence.",
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: "Not all smiles are honest, but mine can be.",
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: "I've seen survivors, raiders, and fools. Which are you?",
  },
];

const PROSTITUTE_YOUNG_2_DIALOGUES = [
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: "The fire’s warm... but I can warm you better.",
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: "You look stressed. Let me help you chill out.",
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message:
      "Not everyone here is looking for trouble. Some just want to forget.",
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: "I've heard every secret this shelter holds.",
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
