import { useState } from "react";

import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import Block from "@ui/Block";
import DialogueBox from "@ui/DialogueBox";
import NotificationBox from "@ui/NotificationBox";

import backgroundImage from "@resources/images/scenes/store.jpg";

import type { SceneComponent } from "@scenes/types/index.types";

import { NPC } from "@npc/index";

import PlayerItems from "./scenes/PlayerItems";
import SellerItems from "./scenes/SellerItems";
import type { StoreNotification } from "./types";

const { STORE_KEEPER } = NPC;

export default function StoreScene(): SceneComponent {
  const { player } = useGame();
  const [notification, setNotification] = useState<StoreNotification | null>(
    null,
  );

  return (
    <SceneLayout
      title="The Store"
      subtitle="Here you can purchase a new item or sell your current items."
      backgroundImage={backgroundImage}
      size="large"
    >
      <DialogueBox
        avatar={STORE_KEEPER.avatar}
        name={STORE_KEEPER.name}
        messages={[`Hey, ${player.name}.`, "Buy, sell, or just looking?"]}
      />

      {notification && (
        <NotificationBox type={notification.type}>
          {notification.content}
        </NotificationBox>
      )}

      <div className="grid grid-cols-2 gap-4">
        <Block>
          <h3 className="text-2xl font-bold text-white">Merchant Inventory</h3>
          <p className="text-sm text-gray-400 mb-4 border-b border-gray-600 pb-4">
            Browse all available items for purchase.
          </p>

          <SellerItems setNotification={setNotification} />
        </Block>
        <Block>
          <h3 className="text-2xl font-bold text-white">Your Inventory</h3>
          <p className="text-sm text-gray-400 mb-4 border-b border-gray-600 pb-4">
            Select items from your inventory to sell to the merchant.
          </p>

          <PlayerItems setNotification={setNotification} />
        </Block>
      </div>
    </SceneLayout>
  );
}
