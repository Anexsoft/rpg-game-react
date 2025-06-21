import SceneLayout from "@layout/SceneLayout/SceneLayout";

import DialogueBox from "@ui/DialogueBox";

import backgroundImage from "@resources/images/scenes/rest.jpg";

import type { SceneComponent } from "@scenes/types/index.types";

import { NPC } from "@npc/index";

export default function RestScene(): SceneComponent {
  const { REST_KEEPER } = NPC;
  return (
    <SceneLayout
      title="Rest zone"
      subtitle="A safe place to catch your breath."
      backgroundImage={backgroundImage}
    >
      <DialogueBox
        avatar={REST_KEEPER.avatar}
        name={REST_KEEPER.name}
        messages={[
          "You look exhausted. Want a place to crash?",
          "Beds are clean... mostly. Better than the street.",
        ]}
      />
    </SceneLayout>
  );
}
