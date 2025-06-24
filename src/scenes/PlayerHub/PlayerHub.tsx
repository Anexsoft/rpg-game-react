import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import backgroundImage from "@resources/images/scenes/player.jpg";

import type { SceneComponent } from "@scenes/types/index.types";

import { getPlayerAvatar } from "@player/utils/index";

import BattleStats from "./components/BattleStats/BattleStats";
import Block from "./components/Block";
import CoreAttributes from "./components/CoreAttributes/CoreAttributes";
import CurrentGold from "./components/CurrentGold";
import Inventory from "./components/Inventory/Inventory";
import PlayerInfo from "./components/PlayerInfo";
import StatPoints from "./components/StatPoints";

export default function PlayerHubScene(): SceneComponent {
  const { player, setPlayer } = useGame();
  const avatar = getPlayerAvatar(player.gender);

  return (
    <SceneLayout
      title="Hero Hub"
      subtitle="This is your personal hub. Review your status, attributes, and future potential."
      backgroundImage={backgroundImage}
      size="large"
    >
      <div className="flex gap-6 text-white">
        <div className="flex flex-col gap-6 w-140">
          <Block className="flex flex-col items-center col-span-1">
            <PlayerInfo player={player} avatar={avatar} />
          </Block>

          <div className="grid grid-cols-2 gap-6">
            <Block>
              <CurrentGold amount={player.gold} />
            </Block>

            <Block>
              <StatPoints amount={player.availableStatPoints} />
            </Block>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Block>
            <CoreAttributes player={player} />
          </Block>

          <Block>
            <BattleStats player={player} setPlayer={setPlayer} />
          </Block>
        </div>

        <div className="flex flex-col gap-6 w-200">
          <Block>
            <Inventory player={player} setPlayer={setPlayer} />
          </Block>
        </div>
      </div>
    </SceneLayout>
  );
}
