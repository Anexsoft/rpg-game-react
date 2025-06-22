type CombatCurrentAttackerProps = {
  isPlayerTurn: boolean;
};

export default function CombatCurrentAttacker({
  isPlayerTurn,
}: CombatCurrentAttackerProps) {
  return (
    <div className="text-center">
      <p className="text-xs text-gray-400">Turn Status</p>
      <p
        className={`text-2xl font-semibold mt-1 animate-pulse ${
          isPlayerTurn ? "text-cyan-400" : "text-red-500"
        }`}
      >
        {isPlayerTurn ? "Your turn" : "Enemy turn"}
      </p>
    </div>
  );
}
