import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";

import { useGame } from "@core/context/GameContext";

import Layout from "@layout/Layout";

import BarScene from "@scenes/Bar/Bar";
import LogoutScene from "@scenes/Logout/Logout";
import PlayerHubScene from "@scenes/PlayerHub/PlayerHub";
import RestScene from "@scenes/Rest/Rest";
import SignInScene from "@scenes/SignIn/SignIn";
import StoreKeeperChatScene from "@scenes/Store/scenes/StoreKeeperChat";
import StoreScene from "@scenes/Store/Store";
import type { SceneComponent } from "@scenes/types/index.types";
import WelcomeScene from "@scenes/Welcome/Welcome";

import {
  ROOT_PATH,
  LOGOUT_PATH,
  STORE_PATH,
  BAR_PATH,
  REST_PATH,
  STORE_KEEPER_CHAT_PATH,
  PLAYER_HUB_PATH,
} from "./router.defs";

function RootRoute(): SceneComponent {
  const { player } = useGame();
  return player ? <WelcomeScene /> : <SignInScene />;
}

function defineRoute(path: string, scene: SceneComponent): RouteObject {
  return {
    path,
    element: <Layout>{scene}</Layout>,
  };
}

const PATHS = [
  /* Home */
  defineRoute(ROOT_PATH, <RootRoute />),

  /* Player */
  defineRoute(PLAYER_HUB_PATH, <PlayerHubScene />),

  /* Town */
  defineRoute(STORE_PATH, <StoreScene />),
  defineRoute(STORE_KEEPER_CHAT_PATH, <StoreKeeperChatScene />),

  defineRoute(BAR_PATH, <BarScene />),
  defineRoute(REST_PATH, <RestScene />),

  /* Logout */
  defineRoute(LOGOUT_PATH, <LogoutScene />),
];

const router = createBrowserRouter(PATHS);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
