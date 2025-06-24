import type { PlayerTurn } from "@scenes/HuntingZone/context/types";

type CombatCurrentAttackerProps = {
  playerTurn: PlayerTurn;
};

export default function CombatCurrentAttacker({
  playerTurn,
}: CombatCurrentAttackerProps) {
  return (
    <div className="text-center">
      <p className="text-xs text-gray-400">Turn Status</p>
      {playerTurn === "player" && (
        <p className={`text-2xl mt-1 animate-pulse text-cyan-400`}>Your turn</p>
      )}

      {playerTurn === "enemy" && (
        <p className={`text-2xl mt-1 animate-pulse text-red-500`}>Enemy Turn</p>
      )}
    </div>
  );
}
