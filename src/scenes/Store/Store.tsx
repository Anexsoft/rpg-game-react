import { ShoppingCart, DollarSign, MessageCircle } from "lucide-react";

import { STORE_KEEPER_NAME } from "@npc/defs/names";

import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import ActionLink from "@ui/ActionLink";
import DialogueBox from "@ui/DialogueBox";

import avatar from "@resources/images/npc/avatars/store-keeper.png";
import backgroundImage from "@resources/images/scenes/store.jpg";

import type { SceneComponent } from "@scenes/types";

import { STORE_KEEPER_CHAT_PATH } from "@src/router.defs";

const ACTION_BUTTON_TEXTS = {
  PURCHASE: "Buy Items",
  SELL: "Sell Items",
  HEAR_A_TALE: "Got any tales worth the telling?",
};

export default function StoreScene(): SceneComponent {
  const { player } = useGame();

  if (!player) return;
  return (
    <SceneLayout
      title="The Store"
      subtitle="Here you can purchase a new item or sell your current items."
      backgroundImage={backgroundImage}
    >
      <DialogueBox
        avatar={avatar}
        name={STORE_KEEPER_NAME}
        messages={[`Hey, ${player.name}.`, "Buy, sell, or just looking?"]}
        type="primary"
      />

      <nav className="space-y-2" aria-label="Store options">
        <ActionLink icon={ShoppingCart} to={""}>
          {ACTION_BUTTON_TEXTS.PURCHASE}
        </ActionLink>
        <ActionLink icon={DollarSign} to={""}>
          {ACTION_BUTTON_TEXTS.SELL}
        </ActionLink>
        <ActionLink icon={MessageCircle} to={STORE_KEEPER_CHAT_PATH}>
          {ACTION_BUTTON_TEXTS.HEAR_A_TALE}
        </ActionLink>
      </nav>
    </SceneLayout>
  );
}
