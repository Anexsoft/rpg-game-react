import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import avatar from "@resources/images/player/avatar.png";
import backgroundImage from "@resources/images/scenes/player.jpg";

import type { SceneComponent } from "@scenes/types/index.types";

import BattleStats from "./components/BattleStats/BattleStats";
import Block from "./components/Block";
import CoreAttributes from "./components/CoreAttributes/CoreAttributes";
import CurrentGold from "./components/CurrentGold";
import Inventory from "./components/Inventory/Inventory";
import PlayerInfo from "./components/PlayerInfo";

export default function PlayerHubScene(): SceneComponent {
  const { player } = useGame();

  return (
    <SceneLayout
      title="Hero Hub"
      subtitle="This is your personal hub. Review your status, attributes, and future potential."
      backgroundImage={backgroundImage}
      size="large"
    >
      <div className="grid md:grid-cols-5 gap-6 text-white">
        <div className="flex flex-col gap-6 col-span-1">
          <Block className="flex flex-col items-center col-span-1">
            <PlayerInfo player={player} avatar={avatar} />
          </Block>

          <Block>
            <CurrentGold amount={player.gold} />
          </Block>
        </div>

        <div className="flex flex-col gap-6 col-span-2">
          <Block>
            <CoreAttributes player={player} />
          </Block>

          <Block>
            <BattleStats player={player} />
          </Block>
        </div>

        <div className="flex flex-col gap-6 col-span-2">
          <Block>
            <Inventory player={player} />
          </Block>
        </div>
      </div>
    </SceneLayout>
  );
}
