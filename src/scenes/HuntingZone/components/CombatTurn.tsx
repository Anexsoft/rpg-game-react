type CombatTurnHubProps = {
  turn: number;
};

export default function CombatTurnHub({ turn }: CombatTurnHubProps) {
  return (
    <div className="bg-black/50 border border-gray-700 p-2 text-center">
      <p className="text-xs text-gray-400">Turn</p>
      <p className="text-3xl font-bold text-white">{turn}</p>
    </div>
  );
}
