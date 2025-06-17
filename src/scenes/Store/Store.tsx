import { ShoppingCart, DollarSign } from "lucide-react";

import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import merchantAvatar from "@resources/images/npc/merchant-avatar.png";


import type { SceneComponent } from "@scenes/types";

export default function StoreScene(): SceneComponent {
  const { player } = useGame();

  if (!player) return;

  return (
    <SceneLayout
      title="Welcome to the Store"
      subtitle="Here you can purchase a new item or sell your current items."
    >
      <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-md shadow-md">
        <figure className="shrink-0">
          <img
            src={merchantAvatar}
            alt="Merchant avatar"
            className="h-16 w-16 rounded-full object-cover border-2 border-yellow-700"
          />
        </figure>
        <div className="text-sm leading-relaxed">
          <p>
            <strong>Merchant:</strong> Greetings, {player.name}.
          </p>
          <p>What would you like to do today?</p>
        </div>
      </div>

      <nav className="space-y-2" aria-label="Store options">
        <button className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center gap-2 text-left">
          <ShoppingCart className="w-5 h-5 text-yellow-400" />
          Buy items
        </button>
        <button className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center gap-2 text-left">
          <DollarSign className="w-5 h-5 text-green-400" />
          Sell items
        </button>
      </nav>
    </SceneLayout>
  );
}
