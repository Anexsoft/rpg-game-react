import { useEffect } from "react";

import { Link } from "react-router-dom";

import Block from "@ui/Block";

import { REST_PATH } from "@src/router.defs";

import ResultReward from "../components/ResultReward";
import { useCombat } from "../context/CombatContext";
import type { CombatStage } from "../types/index.type";

type Props = {
  setCombatStage: (stage: CombatStage) => void;
};

export default function Result({ setCombatStage }: Props) {
  const { result, rewards } = useCombat();

  useEffect(() => {
    if (result === "victory") {
      const handleKey = (e: KeyboardEvent) => {
        if (e.code === "Space") {
          setCombatStage("combat");
        }
      };

      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [result, setCombatStage]);

  if (!result) return null;

  const isVictory = result === "victory";

  return (
    <Block className="flex-1 flex flex-col items-center justify-center text-center">
      {isVictory ? (
        <>
          <div className="text-green-400 text-2xl font-bold animate-pulse mb-4">
            Victory!
          </div>

          {rewards && <ResultReward />}

          <p className="text-gray-400 text-sm font-semibold">
            Press <span className="text-cyan-400 font-bold">SPACE</span> to
            begin
          </p>
        </>
      ) : (
        <>
          <div className="text-red-500 text-2xl font-bold animate-pulse mb-2">
            You were defeated ...
          </div>
          <div className="text-base text-gray-400">
            <Link className="text-cyan-400" to={REST_PATH}>
              Restore
            </Link>{" "}
            your energy to fight again.
          </div>
        </>
      )}
    </Block>
  );
}
