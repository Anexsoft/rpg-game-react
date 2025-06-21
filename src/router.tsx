import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";

import { useGame } from "@core/context/GameContext";

import Layout from "@layout/Layout";

import BarScene from "@scenes/Bar/Bar";
import HuntingZoneScene from "@scenes/HuntingZone/HuntingZone";
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
  ZONE_1_PATH,
  ZONE_2_PATH,
  ZONE_3_PATH,
  ZONE_4_PATH,
  ZONE_5_PATH,
  ZONE_6_PATH,
} from "./router.defs";

function ProtectedScene({ children }: { children: SceneComponent }) {
  const { player } = useGame();
  return player ? children : <SignInScene />;
}

function DefineRoute(path: string, scene: SceneComponent): RouteObject {
  return {
    path,
    element: (
      <Layout>
        <ProtectedScene>{scene}</ProtectedScene>
      </Layout>
    ),
  };
}

const PATHS = [
  /* Home */
  DefineRoute(ROOT_PATH, <WelcomeScene />),

  /* Player */
  DefineRoute(PLAYER_HUB_PATH, <PlayerHubScene />),

  /* Town */
  DefineRoute(STORE_PATH, <StoreScene />),
  DefineRoute(STORE_KEEPER_CHAT_PATH, <StoreKeeperChatScene />),

  DefineRoute(BAR_PATH, <BarScene />),
  DefineRoute(REST_PATH, <RestScene />),

  /* Hunting Zones */
  DefineRoute(ZONE_1_PATH, <HuntingZoneScene zoneId="outskirts" />),
  DefineRoute(ZONE_2_PATH, <HuntingZoneScene zoneId="residential" />),
  DefineRoute(ZONE_3_PATH, <HuntingZoneScene zoneId="hospital" />),
  DefineRoute(ZONE_4_PATH, <HuntingZoneScene zoneId="university" />),
  DefineRoute(ZONE_5_PATH, <HuntingZoneScene zoneId="factory" />),
  DefineRoute(ZONE_6_PATH, <HuntingZoneScene zoneId="labs" />),

  /* Logout */
  DefineRoute(LOGOUT_PATH, <LogoutScene />),
];

const router = createBrowserRouter(PATHS);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
