import { Coins, Sparkles } from "lucide-react";

import { useCombat } from "../context/CombatContext";

export default function ResultReward() {
  const { rewards } = useCombat();

  if (!rewards) {
    return;
  }

  return (
    <>
      <div className="flex flex-col gap-2 items-center text-sm text-yellow-400 mb-6">
        <div className="flex items-center gap-2">
          <Coins className="w-4 h-4" />
          <span>
            You earned <span className="font-bold">+{rewards.gold}₲</span> from
            the battle!
          </span>
        </div>

        <div className="flex items-center gap-2 text-purple-300">
          <Sparkles className="w-4 h-4" />
          <span>
            <span className="font-bold">+{rewards.exp} EXP</span> gained
          </span>
        </div>
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
