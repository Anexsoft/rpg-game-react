type CombatTurnProps = {
  turn: number;
};

export default function CombatTurn({ turn }: CombatTurnProps) {
  return (
    <div className="text-center">
      <p className="text-xs text-gray-400">Turn</p>
      <p className="text-3xl font-bold text-white">{turn}</p>
    </div>
  );
}
