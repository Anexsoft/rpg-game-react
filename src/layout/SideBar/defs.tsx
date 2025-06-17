import { Castle, Home } from "lucide-react";

import InnScene from "@scenes/Inn/Inn";
import StoreScene from "@scenes/Store/Store";
import TavernScene from "@scenes/Tavern/Tavern";
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
      { text: "Go to the Store", scene: <StoreScene /> },
      { text: "Go to the Tavern", scene: <TavernScene /> },
      { text: "Go to the Inn", scene: <InnScene /> },
    ],
  },
];
