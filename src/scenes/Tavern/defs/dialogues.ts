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
    message: [
      "Welcome, traveler. The ale is fresh and the stories are free.",
      "Looking for warmth or whispers tonight?",
    ],
  },
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: [
      "Careful who you trust around here... even shadows carry secrets.",
      "Fancy a pint while you wait?",
    ],
  },
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: [
      "If the walls could talk, they'd ask for a drink too.",
      "What brings you to my humble tavern tonight?",
    ],
  },
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: [
      "Adventurers come and go, but the ale never runs dry.",
      "Need a room or just a listening ear?",
    ],
  },
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: [
      "Keep your coin close and your secrets closer.",
      "Trouble has a way of finding those who seek it.",
    ],
  },
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: [
      "The fireplace is warm, but the gossip is hotter.",
      "Care for a tale or two with your drink?",
    ],
  },
  {
    name: TAVERN_KEEPER_NAME,
    avatar: tavernKeeperAvatar,
    message: [
      "I've seen heroes rise and fall from this very stool.",
      "What story will you leave behind?",
    ],
  },
];

const DAWRF_DIALOGUES = [
  {
    name: DWARF_NAME,
    avatar: dwarfAvatar1,
    message: [
      "Back in my day, goblins didn't run—they screamed!",
      "Now pour me another before I start sobering up.",
    ],
  },
  {
    name: DWARF_NAME,
    avatar: dwarfAvatar1,
    message: [
      "I mined deeper than any dwarf alive, saw things I'll never unsee.",
      "Let's toast to bad decisions and good ale!",
    ],
  },
];

const DRUNK_DIALOGUES = [
  {
    name: DRUNK_NAME,
    avatar: drunkAvatar1,
    message: [
      "You ever talk to the floor? It listens real well...",
      "Heh... better than my ex-wife.",
    ],
  },
  {
    name: DRUNK_NAME,
    avatar: drunkAvatar1,
    message: [
      "I once drank so much I woke up speaking Elvish...",
      "Still can't remember how to say 'hangover' in their tongue.",
    ],
  },
];

const PROSTITUTE_OLD_DIALOGUES = [
  {
    name: PROSTITUTE_OLD_NAME,
    avatar: prostituteAvatarOld1,
    message: [
      "You learn a lot listening at tavern corners.",
      "Want to know who's really in charge of this town?",
    ],
  },
  {
    name: PROSTITUTE_OLD_NAME,
    avatar: prostituteAvatarOld1,
    message: ["Men come and go, but secrets? Secrets stay."],
  },
];

const PROSTITUTE_YOUNG_1_DIALOGUES = [
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: [
      "You've got that look... like someone who's seen too much.",
      "Want to forget it all for a night?",
    ],
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: [
      "Care for a drink, or are you here for something stronger?",
      "I know how to make troubles disappear—at least until morning.",
    ],
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: [
      "Some say the night is dangerous, but I find it thrilling.",
      "What brings you to the tavern at this hour?",
    ],
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: [
      "If you listen closely, you can hear secrets in the laughter.",
      "Want to share one of yours?",
    ],
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: [
      "Not all smiles here are honest, but mine can be—if you want.",
      "Sit with me, and let's chase away the shadows.",
    ],
  },
  {
    name: PROSTITUTE_YOUNG1_NAME,
    avatar: prostituteAvatarYoung1,
    message: [
      "I've seen heroes, villains, and fools pass through these doors.",
      "Which one are you tonight?",
    ],
  },
];

const PROSTITUTE_YOUNG_2_DIALOGUES = [
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: [
      "The fire's warm... but I can warm you better.",
      "Stay for a dance or two.",
    ],
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: [
      "You look tense. Let me help you unwind.",
      "A little laughter and a little company can do wonders.",
    ],
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: [
      "Not everyone here is looking for trouble.",
      "Some just want to forget the world for a while.",
    ],
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: [
      "I've heard every secret this tavern holds.",
      "Care to share one of yours?",
    ],
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: [
      "The night is young, and so am I.",
      "Let's make it a night to remember.",
    ],
  },
  {
    name: PROSTITUTE_YOUNG2_NAME,
    avatar: prostituteAvatarYoung2,
    message: [
      "Sometimes a smile is all it takes to change your luck.",
      "Let me be your lucky charm tonight.",
    ],
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
