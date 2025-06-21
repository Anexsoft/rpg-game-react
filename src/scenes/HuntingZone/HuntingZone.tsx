import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import type { SceneComponent } from "@scenes/types/index.types";

import { ZONES } from "@src/modules/zones";
import type { ZoneId } from "@src/modules/zones/types/ids.types";

import CombatEnemiesHub from "./components/CombatEnemiesHub/CombatEnemiesHub";
import CombatPlayerAvatar from "./components/CombatPlayerAvatar";
import CombatPlayerConsumableItems from "./components/CombatPlayerConsumableItems";
import CombatPlayerEquippedItem from "./components/CombatPlayerEquippedItems";
import CombatPlayerStats from "./components/CombatPlayerStats/CombatPlayerStats";
import CombatTurn from "./components/CombatTurn";

type HuntingZoneSceneProps = {
  zoneId: ZoneId;
};

export default function HuntingZoneScene({
  zoneId,
}: HuntingZoneSceneProps): SceneComponent {
  const { player } = useGame();
  const zone = ZONES.find((zone) => zone.id === zoneId);

  if (!zone) {
    return;
  }

  return (
    <SceneLayout
      title={zone.name}
      subtitle={zone.description}
      backgroundImage={zone.background}
      size="large"
      isCentered={false}
    >
      <div className="flex text-white gap-4 justify-center">
        <div className="bg-black/50 border border-gray-700 p-4 flex-1">
          <CombatEnemiesHub />
        </div>

        <div className="space-y-4 w-100">
          <CombatTurn turn={1} />
          <CombatPlayerAvatar player={player} />
          <CombatPlayerStats player={player} />
          <CombatPlayerEquippedItem player={player} />
          <CombatPlayerConsumableItems player={player} />
        </div>
      </div>
    </SceneLayout>
  );
}
