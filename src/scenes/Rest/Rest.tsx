import { Pill } from "lucide-react";

import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import DialogueBox from "@ui/DialogueBox";

import backgroundImage from "@resources/images/scenes/rest.jpg";

import type { SceneComponent } from "@scenes/types/index.types";

import { NPC } from "@npc/index";

import { PlayerRestoreHandler } from "@player/handlers/player-restore.handler";

export default function RestScene(): SceneComponent {
  const { player, setPlayer } = useGame();

  setPlayer(PlayerRestoreHandler.handle(player));

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

      <div className="text-green-400 mt-4 text-center font-medium flex items-center justify-center gap-2">
        <Pill className="w-5 h-5" />
        You feel your energy being restored.
      </div>
    </SceneLayout>
  );
}
