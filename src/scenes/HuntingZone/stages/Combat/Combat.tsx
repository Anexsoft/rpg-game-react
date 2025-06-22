import { useState, useEffect } from "react";

import CombatEnemies from "@scenes/HuntingZone/components/CombatEnemies/CombatEnemies";
import { attackHandler } from "@scenes/HuntingZone/handlers/attack.handler";

import type { Player } from "@player/types/index.types";

import { generateEnemies } from "@enemy/index";
import type { EnemyId } from "@enemy/types/ids.type";
import type { Enemy } from "@enemy/types/index.type";

import CombatCurrentAttacker from "./componentes/CombatCurrentAttacker";
import CombatTurn from "./componentes/CombatTurn";

interface CombatProps {
  player: Player;
  setPlayer: (p: Player) => void;
  enemyIds: EnemyId[];
  setResult: (result: "victory" | "defeat") => void;
}

export default function Combat({
  player,
  setPlayer,
  enemyIds,
  setResult,
}: CombatProps) {
  const [enemies, setEnemies] = useState<Enemy[]>(generateEnemies(enemyIds));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [turn, setTurn] = useState(1);

  const handleAttack = async () => {
    if (!isPlayerTurn) return;

    const result = await attackHandler({
      player,
      setPlayer,
      enemies,
      setEnemies,
      setIsPlayerTurn,
      setTurn,
      setResult,
    });

    if (result) {
      setResult(result);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space" && isPlayerTurn) {
        handleAttack();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isPlayerTurn]);

  return (
    <div className="flex flex-col items-stretch h-full space-y-4">
      <CombatEnemies enemies={enemies} />

      <div className="grid grid-cols-4 text-center text-base font-semibold bg-black/50 border border-gray-700 items-stretch">
        <button
          className={`p-4 border-r border-gray-700 h-full transition cursor-pointer ${
            isPlayerTurn
              ? "hover:bg-gray-800 text-white"
              : "bg-gray-800 text-gray-500 cursor-not-allowed"
          }`}
          onClick={handleAttack}
          disabled={!isPlayerTurn}
        >
          Attack
        </button>

        <div className="p-4 flex flex-col items-center justify-center gap-1 h-full">
          <CombatTurn turn={turn} />
        </div>

        <div className="p-4 flex flex-col items-center justify-center gap-1 h-full border-l border-gray-700">
          <CombatCurrentAttacker isPlayerTurn={isPlayerTurn} />
        </div>

        <button className="p-4 h-full border-l border-gray-700 hover:bg-gray-800 transition">
          Skills
        </button>
      </div>
    </div>
  );
}
