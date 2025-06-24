import { Link } from "react-router-dom";

import { REST_PATH } from "@src/router.defs";

import ResultReward from "../components/ResultReward";
import { useCombat } from "../context/CombatContext";

export default function Result() {
  const { result, rewards } = useCombat();

  if (!result) {
    return;
  }

  const isVictory = result === "victory";

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-black/50 border border-gray-700 p-6 text-center">
      {isVictory ? (
        <>
          <div className="text-green-400 text-2xl font-bold animate-pulse mb-4">
            Victory!
          </div>

          {rewards && <ResultReward />}
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
    </div>
  );
}
