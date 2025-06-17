import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

// Initialize game behaviour
import "@core/_boostrap";
import { GameContextProvider } from "@core/context/GameContextProvider";

import Layout from "@layout/Layout";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameContextProvider>
      <Layout />
    </GameContextProvider>
  </StrictMode>
);
