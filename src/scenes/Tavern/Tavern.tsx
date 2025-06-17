import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import DialogueBox from "@ui/DialogueBox";

import backgroundImage from "@resources/images/scenes/tavern.jpg";

import type { SceneComponent } from "@scenes/types";

import { TAVERN_DIALOGUES } from "./defs/dialogues";

export default function TavernScene(): SceneComponent {
  const { player } = useGame();

  if (!player) return;

  const { avatar, name, message } =
    TAVERN_DIALOGUES[Math.floor(Math.random() * TAVERN_DIALOGUES.length)];

  return (
    <SceneLayout
      title="Welcome to the Tavern"
      subtitle="A place full of whispers, warmth, and wild tales."
      backgroundImage={backgroundImage}
    >
      <DialogueBox
        avatar={avatar}
        name={name}
        messages={message}
        type="primary"
      />
    </SceneLayout>
  );
}
