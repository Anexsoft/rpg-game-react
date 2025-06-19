type CurrentGoldProps = {
  amount: number;
};

export default function CurrentGold({ amount }: CurrentGoldProps) {
  return (
    <div className="flex justify-between items-center text-base px-2">
      <h3 className="font-bold text-white">Gold</h3>
      <p className="text-2xl font-bold text-yellow-400">{amount}</p>
    </div>
  );
}
