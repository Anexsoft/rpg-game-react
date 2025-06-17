import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import backgroundImage from "@resources/images/scenes/welcome.jpg";

import type { SceneComponent } from "@scenes/types";

import ExistingPlayerSignedIn from "./components/ExistingPlayerSignedIn";
import PlayerSignIn from "./components/PlayerSignIn";

export default function WelcomeScene(): SceneComponent {
  const { player } = useGame();

  return (
    <SceneLayout
      title="Welcome to Arcane Times"
      subtitle="A world of ancient magic, forgotten secrets, and battles yet to come."
      isCentered={true}
      backgroundImage={backgroundImage}
    >
      {player ? <ExistingPlayerSignedIn /> : <PlayerSignIn />}
    </SceneLayout>
  );
}
