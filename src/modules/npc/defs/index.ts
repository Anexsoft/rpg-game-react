import barKeeperAvatar from "@resources/images/npc/avatars/bar-keeper.png";
import restKeeperAvatar from "@resources/images/npc/avatars/rest-keeper.png";
import storeKeeperAvatar from "@resources/images/npc/avatars/store-keeper.png";

type NPCInfo = {
  name: string;
  avatar: string;
};

type NPC = {
  STORE_KEEPER: NPCInfo;
  BAR_KEEPER: NPCInfo;
  REST_KEEPER: NPCInfo;
};

export const NPC = {
  STORE_KEEPER: {
    name: "Miles Rourke",
    avatar: storeKeeperAvatar,
  },
  BAR_KEEPER: {
    name: "Jade Navarro",
    avatar: barKeeperAvatar,
  },
  REST_KEEPER: {
    name: "Rina Holloway",
    avatar: restKeeperAvatar,
  },
};
