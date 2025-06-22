import { Link } from "react-router-dom";

import { REST_PATH } from "@src/router.defs";

type StartProps = {
  playerHp: number;
};

export default function Start({ playerHp }: StartProps) {
  const canFight = playerHp > 0;

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-black/50 border border-gray-700 p-4 text-center text-white text-xl">
      {canFight ? (
        <>
          <p>Ready to start the fight?</p>
          <p className="text-gray-400 text-sm font-semibold">
            Press <span className="text-cyan-400 font-bold">Space</span> to
            begin
          </p>
        </>
      ) : (
        <>
          <p>You are too weak to fight.</p>
          <p className="text-sm font-semibold">
            <Link className="text-cyan-400" to={REST_PATH}>
              Restore
            </Link>{" "}
            your energy first.
          </p>
        </>
      )}
    </div>
  );
}
