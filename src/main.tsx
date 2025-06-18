import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

// Initialize game behaviour
import "@core/_boostrap";
import { GameContextProvider } from "@core/context/GameContextProvider";

import "./index.css";

import AppRouter from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameContextProvider>
      <AppRouter />
    </GameContextProvider>
  </StrictMode>
);
