import { BackpackIcon } from "lucide-react";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import ActionLink from "@ui/ActionLink";
import QuoteBox from "@ui/QuoteBox";

import backgroundImage from "@resources/images/scenes/store.jpg";

import { NPC } from "@npc/index";

import { STORE_PATH } from "@src/router.defs";

import { DIALOGUES } from "./defs";

export const StoreKeeperChatScene = () => {
  const { STORE_KEEPER } = NPC;
  const message = DIALOGUES[Math.floor(Math.random() * DIALOGUES.length)];

  return (
    <SceneLayout
      title=" Got any rumor worth the telling?"
      subtitle="The store keeper leans in, ready to share a secret..."
      backgroundImage={backgroundImage}
    >
      <QuoteBox
        avatar={STORE_KEEPER.avatar}
        message={message}
        name={STORE_KEEPER.name}
      ></QuoteBox>

      <div>
        <ActionLink icon={BackpackIcon} to={STORE_PATH} align="center">
          Go Back
        </ActionLink>
      </div>
    </SceneLayout>
  );
};

export default StoreKeeperChatScene;
