type StatPointsProps = {
  amount: number;
};

export default function StatPoints({ amount }: StatPointsProps) {
  return (
    <div className="flex justify-between items-center text-base px-2">
      <h3 className="font-bold text-white">Stat Points</h3>
      <p className="text-2xl font-bold text-cyan-400">{amount}</p>
    </div>
  );
}
