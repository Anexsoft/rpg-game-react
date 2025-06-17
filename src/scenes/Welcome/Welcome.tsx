import { useGame } from "@core/context/GameContext";

import type { SceneComponent } from "@scenes/types";


import ExistingPlayerSignedIn from "./components/ExistingPlayerSignedIn";
import PlayerSignIn from "./components/PlayerSignIn";

export default function WelcomeScene(): SceneComponent {
  const { player } = useGame();

  return !player ? <PlayerSignIn /> : <ExistingPlayerSignedIn />;
}
