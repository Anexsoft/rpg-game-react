import { useState } from "react";

import { useGame } from "@core/context/GameContext";

import { PlayerCreateHandler } from "@player/handlers/player-create.handler";
import { PlayerUpgradeHandler } from "@player/handlers/player-upgrade.handler";

export default function PlayerSignIn() {
  const { setPlayer, openSidebar, playerExists } = useGame();
  const [name, setName] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let player = null;
      const playerName = e.currentTarget.value;

      if (!playerExists(playerName)) {
        player = PlayerCreateHandler.handle(playerName);
        PlayerUpgradeHandler.handle(player);

        setPlayer({
          action: "add",
          newPlayer: player,
        });
      } else {
        setPlayer({ action: "reuse", existingPlayerName: playerName });
      }

      openSidebar();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-white">
      <div className="text-xl font-semibold">Choose your character's name</div>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter name..."
        className="bg-gray-800 text-white border border-white/20 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white/50"
      />

      <p className="text-sm text-gray-400">
        Press <span className="font-semibold text-white">Enter</span> to
        continue
      </p>
    </div>
  );
}
