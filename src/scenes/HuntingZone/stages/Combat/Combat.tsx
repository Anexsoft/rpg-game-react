import { useState, useEffect, useRef } from "react";

import { useGame } from "@core/context/GameContext";

import CombatEnemies from "@scenes/HuntingZone/components/CombatEnemies/CombatEnemies";
import { useCombat } from "@scenes/HuntingZone/context/CombatContext";
import { skillAttackUsageHandler } from "@scenes/HuntingZone/handlers/skill-attack-usage.handler";
import { skillEffectUsageHandler } from "@scenes/HuntingZone/handlers/skill-effect-usage.handler";
import { updatePlayerRewards } from "@scenes/HuntingZone/handlers/update-player-rewards.handler";
import { weaponUsageHandler } from "@scenes/HuntingZone/handlers/weapon-usage.handler";
import type { CombatStage } from "@scenes/HuntingZone/types/index.type";

import type {
  SkillBehaviourAttack,
  SkillBehaviourEffect,
} from "@skills/types/behaviour.type";

import { generateEnemies } from "@enemy/index";
import type { EnemyId } from "@enemy/types/ids.type";
import type { Enemy } from "@enemy/types/index.type";

import type { ZoneId } from "@src/modules/zones/types/ids.types";

import CombatCurrentAttacker from "./componentes/CombatCurrentAttacker";
import CombatSkills from "./componentes/CombatSkills";
import CombatTurn from "./componentes/CombatTurn";
import { PlayerUpdateCombatHistoryHandler } from "@player/handlers/player-update-combat-history.handler";

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

  const [turn, setTurn] = useState(0);

  useEffect(() => {
    setTurn(1);
  }, []);

  const determinateResult = () => {
    const _player = playerRef.current;
    let result: "victory" | "defeat" | null = null;
    let updatedPlayer = _player;

    if (_player.hp <= 0) {
      result = "defeat";
      updatedPlayer = PlayerUpdateCombatHistoryHandler.handle(
        _player,
        "defeat"
      );
    } else if (enemies.every((e) => !e.isAlive)) {
      result = "victory";

      updatedPlayer = updatePlayerRewards(_player, zoneId, enemies, setRewards);
      updatedPlayer = PlayerUpdateCombatHistoryHandler.handle(
        updatedPlayer,
        "victory"
      );
    }

    if (result) {
      setResult(result);
      setPlayer(updatedPlayer);
      setCombatStage("result");
    }
  };

  const handleWeaponAttack = async (skipPlayerAttack = false) => {
    if (playerTurn !== "player") return;

    setPlayerTurn("enemy");

    await weaponUsageHandler({
      skipPlayerAttack,
      player: playerRef.current,
      setPlayer,
      enemies,
      setEnemies,
      setTurn,
    });

    setPlayerTurn("player");

    determinateResult();
  };

  const handleSkillAttack = async (
    type: SkillBehaviourAttack | SkillBehaviourEffect
  ) => {
    if (playerTurn !== "player") return;

    setPlayerTurn("enemy");

    if (type === "attack") {
      await skillAttackUsageHandler({
        player: playerRef.current,
        setPlayer,
        enemies,
        setEnemies,
      });

      await handleWeaponAttack(true);
    }

    if (type === "effect") {
      await skillEffectUsageHandler({
        player: playerRef.current,
        setPlayer,
        enemies,
        setEnemies,
      });

      await handleWeaponAttack();
    }

    setPlayerTurn("player");

    determinateResult();
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
        handleWeaponAttack();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [playerTurn]);

  return (
    <div className="flex flex-col items-stretch h-full space-y-4">
      <CombatEnemies enemies={enemies} />

      <div className="grid grid-cols-4 text-center text-base font-semibold bg-black/50 border border-gray-700 items-stretch overflow-hidden rounded-lg">
        <button
          className={`p-4 border-r border-gray-700 h-full transition cursor-pointer rounded-l-lg ${
            playerTurn === "player"
              ? "hover:bg-gray-800 text-white"
              : "bg-gray-800 text-gray-500 cursor-not-allowed"
          }`}
          onClick={() => handleWeaponAttack()}
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

        <div className="p-4 h-full border-l border-gray-700 rounded-r-lg">
          <CombatSkills
            turn={turn}
            isPlayerTurn={playerTurn === "player"}
            onClick={handleSkillAttack}
          />
        </div>
      </div>
    </div>
  );
}
