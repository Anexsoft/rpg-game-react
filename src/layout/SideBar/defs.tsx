import { Castle, Home } from "lucide-react";

import StoreScene from "@scenes/Store/Store";
import WelcomeScene from "@scenes/Welcome/Welcome";

export const menu = [
  {
    type: "item",
    icon: Home,
    text: "Home",
    scene: <WelcomeScene />,
  },
  {
    type: "group",
    icon: Castle,
    text: "Visit the town",
    items: [
      { text: "Go to the shop", scene: <StoreScene /> },
      { text: "Go to the tavern", scene: <WelcomeScene /> },
      { text: "Go to rest", scene: <WelcomeScene /> },
    ],
  },
];
