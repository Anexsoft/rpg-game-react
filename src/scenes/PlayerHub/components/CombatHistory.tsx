type CombatHistoryProps = {
  victories: number;
  defeats: number;
};

export default function CombatHistory({
  victories,
  defeats,
}: CombatHistoryProps) {
  return (
    <div className="flex gap-4 font-bold text-center">
      <span className="text-green-400 flex-1">Wins: {victories}</span>
      <span className="text-red-400 flex-1">Losses: {defeats}</span>
    </div>
  );
}
