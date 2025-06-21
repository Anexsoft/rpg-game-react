import { useEffect, useState } from "react";

import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import type { SceneComponent } from "@scenes/types/index.types";

import { generateEnemies } from "@enemy/index";
import { Enemy } from "@enemy/types/index.type";

import { ZONES } from "@src/modules/zones";
import type { ZoneId } from "@src/modules/zones/types/ids.types";

import CombatEnemies from "./components/CombatEnemiesHub/CombatEnemies";
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

  const [combatStage, setCombatStage] = useState<"start" | "combat" | "result">(
    "start",
  );
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [turn, setTurn] = useState(1);
  const [playerHp, setPlayerHp] = useState(player.hp);
  const [result, setResult] = useState<"victory" | "defeat" | null>(null);
  const [attackingEnemyName, setAttackingEnemyName] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (!zone) return;

    const generatedEnemies = generateEnemies(zone.enemies);

    setEnemies(generatedEnemies);
    setPlayerHp(player.hp);
  }, [zone]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space" && combatStage === "start") {
        setCombatStage("combat");
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [combatStage]);

  const handleAttack = () => {
    if (!isPlayerTurn) return;

    const updatedEnemies = [...enemies];
    const target = updatedEnemies.find((e) => e.isAlive());

    if (target) {
      target.takeDamage(player.dmg);
    }

    setEnemies(updatedEnemies);
    setIsPlayerTurn(false);

    setTimeout(() => {
      const stillAlive = updatedEnemies.some((e) => e.isAlive());
      if (!stillAlive) {
        setResult("victory");
        setCombatStage("result");
        return;
      }

      let newPlayerHp = playerHp;

      const attackNextEnemy = (index: number) => {
        const enemy = updatedEnemies[index];
        if (!enemy) {
          finishEnemyTurn();
          return;
        }

        if (enemy.isAlive()) {
          setAttackingEnemyName(enemy.name);
          setTimeout(() => {
            newPlayerHp -= enemy.dmg;
            if (newPlayerHp <= 0) {
              setPlayerHp(0);
              setResult("defeat");
              setCombatStage("result");
              return;
            }
            attackNextEnemy(index + 1);
          }, 500);
        } else {
          attackNextEnemy(index + 1);
        }
      };

      const finishEnemyTurn = () => {
        setAttackingEnemyName(null);
        setPlayerHp(newPlayerHp);
        setTurn((prev) => prev + 1);
        setIsPlayerTurn(true);
      };

      attackNextEnemy(0);
    }, 500);
  };

  if (!zone) return;

  return (
    <SceneLayout
      title={zone.name}
      subtitle={zone.description}
      backgroundImage={zone.background}
      size="large"
      isCentered={false}
    >
      <div className="flex text-white gap-6 justify-center items-stretch h-full">
        <div className="flex flex-col flex-1 gap-6">
          <div className="flex-1 bg-black/50 border border-gray-700 p-4 flex items-center justify-center text-center text-lg font-medium">
            {combatStage === "start" && (
              <p>
                Are you ready to start the fight? Press <strong>space</strong>{" "}
                to confirm.
              </p>
            )}
            {combatStage === "combat" && <CombatEnemies enemies={enemies} />}
            {combatStage === "result" && (
              <div>
                {result === "victory" && (
                  <p className="text-green-400">You won the fight!</p>
                )}
                {result === "defeat" && (
                  <p className="text-red-400">You were defeated...</p>
                )}
              </div>
            )}
          </div>

          {combatStage === "combat" && (
            <div className="bg-black/50 border border-gray-700 grid grid-cols-4 text-center text-base font-semibold items-center">
              <button
                className={`border-r border-gray-700 p-4 transition ${
                  isPlayerTurn
                    ? "hover:bg-gray-800 text-white"
                    : "bg-gray-800 text-gray-500 cursor-not-allowed"
                }`}
                onClick={handleAttack}
                disabled={!isPlayerTurn}
              >
                Attack
              </button>
              <div className="p-4 flex flex-col items-center gap-1">
                <CombatTurn turn={turn} />
              </div>
              <div className="border-l border-gray-700 p-4 flex flex-col items-center gap-1">
                {isPlayerTurn
                  ? "(your turn)"
                  : attackingEnemyName
                    ? `(${attackingEnemyName} attacking)`
                    : ""}
              </div>
              <button className="border-l border-gray-700 p-4 hover:bg-gray-800 transition">
                Skills
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-4 w-80">
          <CombatPlayerAvatar player={{ ...player, hp: playerHp }} />
          <CombatPlayerStats player={{ ...player, hp: playerHp }} />
          <CombatPlayerEquippedItem player={player} />
          <CombatPlayerConsumableItems player={player} />
        </div>
      </div>
    </SceneLayout>
  );
}
