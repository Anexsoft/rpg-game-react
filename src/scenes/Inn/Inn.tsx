import { INN_KEEPER_NAME } from "@npc/defs/names";

import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import DialogueBox from "@ui/DialogueBox";

import avatar from "@resources/images/npc/avatars/inn-keeper.png";
import backgroundImage from "@resources/images/scenes/inn.jpg";

import type { SceneComponent } from "@scenes/types";

export default function InnScene(): SceneComponent {
  const { player } = useGame();

  if (!player) return;

  return (
    <SceneLayout
      title="The Inn"
      subtitle="A cozy refuge from the outside world."
      backgroundImage={backgroundImage}
    >
      <DialogueBox
        avatar={avatar}
        name={INN_KEEPER_NAME}
        messages={[
          "Welcome to the Inn. Would you like to rest?",
          "A warm bed awaits.",
        ]}
        type="primary"
      />
    </SceneLayout>
  );
}
