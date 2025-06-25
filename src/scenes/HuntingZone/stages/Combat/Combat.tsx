import { useState, useEffect, useRef } from "react";

import { useGame } from "@core/context/GameContext";

import CombatEnemies from "@scenes/HuntingZone/components/CombatEnemies/CombatEnemies";
import { useCombat } from "@scenes/HuntingZone/context/CombatContext";
import { attackHandler } from "@scenes/HuntingZone/handlers/attack.handler";
import type { CombatStage } from "@scenes/HuntingZone/types/index.type";

import { generateEnemies } from "@enemy/index";
import type { EnemyId } from "@enemy/types/ids.type";
import type { Enemy } from "@enemy/types/index.type";

import type { ZoneId } from "@src/modules/zones/types/ids.types";

import CombatCurrentAttacker from "./componentes/CombatCurrentAttacker";
import CombatTurn from "./componentes/CombatTurn";

interface CombatProps {
  zoneId: ZoneId;
  enemyIds: EnemyId[];
  setCombatStage: (value: CombatStage) => void;
}

export default function Combat({
  zoneId,
  enemyIds,
  setCombatStage,
}: CombatProps) {
  const { player, setPlayer } = useGame();
  const playerRef = useRef(player);

  const { setRewards, setResult, playerTurn, setPlayerTurn } = useCombat();

  const [enemies, setEnemies] = useState<Enemy[]>(() =>
    generateEnemies(enemyIds)
  );

  const [turn, setTurn] = useState(1);

  const handleAttack = async () => {
    if (playerTurn !== "player") return;

    setPlayerTurn("enemy");

    const result = await attackHandler({
      zoneId,
      player: playerRef.current,
      setPlayer,
      enemies,
      setEnemies,
      setTurn,
      setResult,
      setRewards,
    });

    setPlayerTurn("player");

    if (result) {
      setResult(result);
      setCombatStage("result");
    }
  };

  useEffect(() => {
    playerRef.current = player;
  }, [player]);

  useEffect(() => {
    setPlayerTurn("player");
  }, []);

  useEffect(() => {
    if (playerTurn !== "player") {
      return;
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        handleAttack();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [playerTurn]);

  return (
    <div className="flex flex-col items-stretch h-full space-y-4">
      <CombatEnemies enemies={enemies} />

      <div className="grid grid-cols-4 text-center text-base font-semibold bg-black/50 border border-gray-700 items-stretch">
        <button
          className={`p-4 border-r border-gray-700 h-full transition cursor-pointer ${
            playerTurn === "player"
              ? "hover:bg-gray-800 text-white"
              : "bg-gray-800 text-gray-500 cursor-not-allowed"
          }`}
          onClick={handleAttack}
          disabled={playerTurn !== "player"}
        >
          Attack
        </button>

        <div className="p-4 flex flex-col items-center justify-center gap-1 h-full">
          <CombatTurn turn={turn} />
        </div>

        <div className="p-4 flex flex-col items-center justify-center gap-1 h-full border-l border-gray-700">
          <CombatCurrentAttacker playerTurn={playerTurn} />
        </div>

        <button className="p-4 h-full border-l border-gray-700 hover:bg-gray-800 transition">
          Skills
        </button>
      </div>
    </div>
  );
}
