import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";

import { useGame } from "@core/context/GameContext";

import Layout from "@layout/Layout";

import InnScene from "@scenes/Inn/Inn";
import LogoutScene from "@scenes/Logout/Logout";
import SignInScene from "@scenes/SignIn/SignIn";
import StoreKeeperChatScene from "@scenes/Store/scenes/StoreKeeperChat";
import StoreScene from "@scenes/Store/Store";
import TavernScene from "@scenes/Tavern/Tavern";
import type { SceneComponent } from "@scenes/types";
import WelcomeScene from "@scenes/Welcome/Welcome";

import {
  ROOT_PATH,
  LOGOUT_PATH,
  STORE_PATH,
  TAVERN_PATH,
  INN_PATH,
  STORE_KEEPER_CHAT_PATH,
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

  /* Town */
  defineRoute(STORE_PATH, <StoreScene />),
  defineRoute(STORE_KEEPER_CHAT_PATH, <StoreKeeperChatScene />),

  defineRoute(TAVERN_PATH, <TavernScene />),
  defineRoute(INN_PATH, <InnScene />),

  /* Logout */
  defineRoute(LOGOUT_PATH, <LogoutScene />),
];

const router = createBrowserRouter(PATHS);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
