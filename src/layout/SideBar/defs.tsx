import { Castle, Home, LogOut } from "lucide-react";

import {
  INN_PATH,
  LOGOUT_PATH,
  ROOT_PATH,
  STORE_PATH,
  TAVERN_PATH,
} from "@src/router.defs";

export const menu = [
  {
    type: "item",
    icon: Home,
    text: "Home",
    path: ROOT_PATH,
  },
  {
    type: "group",
    icon: Castle,
    text: "Visit the town",
    items: [
      { text: "Go to the Store", path: STORE_PATH },
      { text: "Go to the Tavern", path: TAVERN_PATH },
      { text: "Go to the Inn", path: INN_PATH },
    ],
  },
  {
    type: "item",
    icon: LogOut,
    text: "Logout",
    path: LOGOUT_PATH,
  },
];
