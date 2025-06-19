import SceneLayout from "@layout/SceneLayout/SceneLayout";

import QuoteBox from "@ui/QuoteBox";

import backgroundImage from "@resources/images/scenes/bar.jpg";

import type { SceneComponent } from "@scenes/types/index.types";

import { TAVERN_DIALOGUES } from "./defs/dialogues";

export default function BarScene(): SceneComponent {
  const { avatar, name, message } =
    TAVERN_DIALOGUES[Math.floor(Math.random() * TAVERN_DIALOGUES.length)];

  return (
    <SceneLayout
      title="Bar"
      subtitle="A ruined shelter reeking of sweat, booze, and survival stories."
      backgroundImage={backgroundImage}
    >
      <QuoteBox avatar={avatar} message={message} name={name}></QuoteBox>
    </SceneLayout>
  );
}
