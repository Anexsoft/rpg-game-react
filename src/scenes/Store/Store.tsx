import { useState, type JSX } from "react";

import { STORE_KEEPER_NAME } from "@npc/defs/names";
import { ShoppingCart, DollarSign, MessageCircle } from "lucide-react";

import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import ActionButton from "@ui/ActionButton";
import DialogueBox from "@ui/DialogueBox";

import avatar from "@resources/images/npc/avatars/store-keeper.png";
import backgroundImage from "@resources/images/scenes/store.jpg";

import type { SceneComponent } from "@scenes/types";

import { TalkToStoreKeeper } from "./components/TalkToStoreKeeper";

const ACTION_BUTTON_TEXTS = {
  PURCHASE: "Buy Items",
  SELL: "Sell Items",
  HEAR_A_TALE: "Got any tales worth the telling?",
};

export default function StoreScene(): SceneComponent {
  const [modal, setModal] = useState<JSX.Element | null>(null);
  const { player } = useGame();

  if (!player) return;

  const onClose = () => {
    setModal(null);
  };

  const talkToStoreKeeper = () => {
    setModal(
      TalkToStoreKeeper({
        title: ACTION_BUTTON_TEXTS.HEAR_A_TALE,
        onClose,
      })
    );
  };

  return (
    <SceneLayout
      title="Welcome to the Store"
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
        <ActionButton icon={ShoppingCart}>
          {ACTION_BUTTON_TEXTS.PURCHASE}
        </ActionButton>
        <ActionButton icon={DollarSign}>
          {ACTION_BUTTON_TEXTS.SELL}
        </ActionButton>
        <ActionButton onClick={() => talkToStoreKeeper()} icon={MessageCircle}>
          {ACTION_BUTTON_TEXTS.HEAR_A_TALE}
        </ActionButton>
      </nav>

      {modal}
    </SceneLayout>
  );
}
