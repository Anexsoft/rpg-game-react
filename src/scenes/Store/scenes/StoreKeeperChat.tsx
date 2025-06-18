import { STORE_KEEPER_NAME } from "@npc/defs/names";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import QuoteBox from "@ui/QuoteBox";

import avatar from "@resources/images/npc/avatars/store-keeper.png";
import backgroundImage from "@resources/images/scenes/store.jpg";

import { DIALOGUES } from "./defs";

export const StoreKeeperChatScene = () => {
  const message = DIALOGUES[Math.floor(Math.random() * DIALOGUES.length)];

  return (
    <SceneLayout
      title="Got any tales worth the telling?"
      subtitle="The store keeper leans in, ready to share a secret..."
      backgroundImage={backgroundImage}
    >
      <QuoteBox
        avatar={avatar}
        message={message}
        name={STORE_KEEPER_NAME}
      ></QuoteBox>
    </SceneLayout>
  );
};

export default StoreKeeperChatScene;
