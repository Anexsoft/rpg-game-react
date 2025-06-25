import { Coins } from "lucide-react";

import { useCombat } from "../context/CombatContext";

export default function ResultReward() {
  const { rewards } = useCombat();

  if (!rewards) {
    return;
  }

  return (
    <>
      <div className="flex items-center gap-2 text-yellow-400 text-sm mb-6 ">
        <Coins className="w-4 h-4" />
        <span>
          You earned <span className="font-bold">+{rewards.gold}₲</span> from
          the battle!
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-sm">
        {rewards.rewards.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-white text-sm"
          >
            <img
              src={item.picture}
              alt={item.name}
              className="w-18 h-18 rounded border border-gray-600 object-cover mb-1"
            />
            <span className="text-xs text-center">{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
