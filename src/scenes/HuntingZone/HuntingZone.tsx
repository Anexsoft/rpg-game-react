import { useEffect, useState } from "react";

import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import type { SceneComponent } from "@scenes/types/index.types";

import { ZONES } from "@src/modules/zones";
import type { ZoneId } from "@src/modules/zones/types/ids.types";

import CombatPlayerAvatar from "./components/CombatPlayerAvatar";
import CombatPlayerConsumableItems from "./components/CombatPlayerConsumableItems";
import CombatPlayerEquippedItem from "./components/CombatPlayerEquippedItems";
import CombatPlayerStats from "./components/CombatPlayerStats/CombatPlayerStats";
import Combat from "./stages/Combat/Combat";
import Result from "./stages/Result";
import Start from "./stages/Start";

type HuntingZoneSceneProps = {
  zoneId: ZoneId;
};

export default function HuntingZoneScene({
  zoneId,
}: HuntingZoneSceneProps): SceneComponent {
  const { player, setPlayer } = useGame();
  const zone = ZONES.find((zone) => zone.id === zoneId);

  const [combatStage, setCombatStage] = useState<"start" | "combat" | "result">(
    "start",
  );
  const [result, setResult] = useState<"victory" | "defeat" | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (player.hp > 0 && e.code === "Space" && combatStage === "start") {
        setCombatStage("combat");
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [combatStage]);

  useEffect(() => {
    if (result !== null) {
      setCombatStage("result");
    }
  }, [result]);

  if (!zone) return;

  return (
    <SceneLayout
      title={zone.name}
      subtitle={zone.description}
      backgroundImage={zone.background}
      size="large"
      isCentered={false}
    >
      <div className="flex gap-6 text-white justify-center items-stretch h-full">
        <div className="flex flex-col flex-1 gap-6">
          {combatStage === "start" && <Start playerHp={player.hp} />}
          {combatStage === "combat" && (
            <Combat
              enemyIds={zone.enemies}
              player={player}
              setPlayer={setPlayer}
              setResult={setResult}
            />
          )}
          {combatStage === "result" && <Result result={result} />}
        </div>

        <div className="flex flex-col space-y-4 w-80">
          <CombatPlayerAvatar player={player} />
          <CombatPlayerStats player={player} />
          <CombatPlayerEquippedItem player={player} />
          <CombatPlayerConsumableItems player={player} />
        </div>
      </div>
    </SceneLayout>
  );
}
