import { ShoppingCart, DollarSign, MessageCircle } from "lucide-react";

import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import ActionLink from "@ui/ActionLink";
import DialogueBox from "@ui/DialogueBox";

import backgroundImage from "@resources/images/scenes/store.jpg";

import type { SceneComponent } from "@scenes/types/index.types";

import { NPC } from "@npc/defs";

import { STORE_KEEPER_CHAT_PATH } from "@src/router.defs";

const { STORE_KEEPER } = NPC;

export default function StoreScene(): SceneComponent {
  const { player } = useGame();

  return (
    <SceneLayout
      title="The Store"
      subtitle="Here you can purchase a new item or sell your current items."
      backgroundImage={backgroundImage}
    >
      <DialogueBox
        avatar={STORE_KEEPER.avatar}
        name={STORE_KEEPER.name}
        messages={[`Hey, ${player.name}.`, "Buy, sell, or just looking?"]}
      />

      <nav className="space-y-2" aria-label="Store options">
        <ActionLink icon={ShoppingCart} to={""}>
          Buy items
        </ActionLink>
        <ActionLink icon={DollarSign} to={""}>
          Sel items
        </ActionLink>
        <ActionLink icon={MessageCircle} to={STORE_KEEPER_CHAT_PATH}>
          Got any rumor worth the telling?
        </ActionLink>
      </nav>
    </SceneLayout>
  );
}
