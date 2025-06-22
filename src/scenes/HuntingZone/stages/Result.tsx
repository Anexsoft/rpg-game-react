import { Link } from "react-router-dom";

import { REST_PATH } from "@src/router.defs";

type ResultProps = {
  result: "victory" | "defeat" | null;
};

export default function Result({ result }: ResultProps) {
  if (!result) return null;

  const isVictory = result === "victory";

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-black/50 border border-gray-700 p-4 text-center text-2xl font-bold">
      {isVictory ? (
        <div className="text-green-400 animate-pulse">Victory!</div>
      ) : (
        <>
          <div className="text-red-500 animate-pulse mb-2">
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
