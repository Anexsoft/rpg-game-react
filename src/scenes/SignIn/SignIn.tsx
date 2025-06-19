import { useState } from "react";

import { APP_NAME } from "@core/config";
import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import backgroundImage from "@resources/images/scenes/welcome.jpg";

import { PlayerCreateHandler } from "@player/handlers/player-create.handler";
import { PlayerUpgradeHandler } from "@player/handlers/player-upgrade.handler";

export default function SignInScene() {
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
    <SceneLayout
      title={`Welcome to ${APP_NAME}`}
      subtitle="The town lies quiet. But something watches in the dark."
      isCentered={true}
      backgroundImage={backgroundImage}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter your name..."
        className="bg-gray-800 text-white border border-white/20 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white/50"
      />

      <p className="text-sm text-gray-400 mt-2">
        Press <span className="font-semibold text-white">Enter</span> to begin
        your descent.
      </p>
    </SceneLayout>
  );
}
