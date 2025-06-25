import { useEffect, useState } from "react";

import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import type { SceneComponent } from "@scenes/types/index.types";

import { ZONES } from "@src/modules/zones";

import CombatPlayerAvatar from "./components/CombatPlayerAvatar";
import CombatPlayerConsumableItems from "./components/CombatPlayerConsumableItems";
import CombatPlayerEquippedItem from "./components/CombatPlayerEquippedItems";
import CombatPlayerStats from "./components/CombatPlayerStats/CombatPlayerStats";
import { CombatProvider } from "./context/CombatProvider";
import Combat from "./stages/Combat/Combat";
import Result from "./stages/Result";
import Start from "./stages/Start";
import type { CombatStage, HuntingZoneSceneProps } from "./types/index.type";

export default function HuntingZoneScene({
  zoneId,
}: HuntingZoneSceneProps): SceneComponent {
  const { player } = useGame();

  const zone = ZONES.find((zone) => zone.id === zoneId);

  const [combatStage, setCombatStage] = useState<CombatStage>("start");

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (player.hp > 0 && e.code === "Space" && combatStage === "start") {
        setCombatStage("combat");
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [combatStage]);

  if (!zone) return;

  return (
    <CombatProvider>
      <SceneLayout
        title={zone.name}
        subtitle={zone.description}
        backgroundImage={zone.background}
        size="large"
        isCentered={false}
      >
        <div className="flex gap-6 text-white justify-center items-stretch h-full">
          <div className="flex flex-col flex-1 gap-6">
            {combatStage === "start" && <Start />}
            {combatStage === "combat" && (
              <Combat
                zoneId={zoneId}
                enemyIds={zone.enemies}
                setCombatStage={setCombatStage}
              />
            )}
            {combatStage === "result" && (
              <Result setCombatStage={setCombatStage} />
            )}
          </div>

          <div className="flex flex-col space-y-4 w-80">
            <CombatPlayerAvatar />
            <CombatPlayerStats />
            <CombatPlayerEquippedItem />
            <CombatPlayerConsumableItems />
          </div>
        </div>
      </SceneLayout>
    </CombatProvider>
  );
}
