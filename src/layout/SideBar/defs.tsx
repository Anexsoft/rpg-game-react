import { Castle, Home, LogOut, Shield, Biohazard } from "lucide-react";

import { ZONES } from "@src/modules/zones";
import {
  REST_PATH,
  LOGOUT_PATH,
  PLAYER_HUB_PATH,
  ROOT_PATH,
  STORE_PATH,
  BAR_PATH,
} from "@src/router.defs";

export const menu = [
  {
    type: "item",
    icon: Home,
    text: "Home",
    path: ROOT_PATH,
  },
  {
    type: "item",
    icon: Shield,
    text: "Hub",
    path: PLAYER_HUB_PATH,
  },
  {
    type: "group",
    icon: Castle,
    text: "Visit the town",
    items: [
      { text: "Go to the Store", path: STORE_PATH },
      { text: "Go to the Bar", path: BAR_PATH },
      { text: "Go to Rest", path: REST_PATH },
    ],
  },
  {
    type: "group",
    icon: Biohazard,
    text: "Hunting Zone",
    items: ZONES.map(({ name, path }) => ({ text: name, path })),
  },
  {
    type: "item",
    icon: LogOut,
    text: "Logout",
    path: LOGOUT_PATH,
  },
];
