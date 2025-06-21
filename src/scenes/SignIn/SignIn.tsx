import { useState } from "react";

import { APP_NAME } from "@core/config";
import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import ActionButton from "@ui/ActionButton";

import backgroundImage from "@resources/images/scenes/welcome.jpg";

import { PlayerCreateHandler } from "@player/handlers/player-create.handler";
import { PlayerUpgradeHandler } from "@player/handlers/player-upgrade.handler";

export default function SignInScene() {
  const { setPlayer, openSidebar, findPlayer } = useGame();
  const [step, setStep] = useState<"name" | "gender">("name");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleNameSubmit = () => {
    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters.");
      return;
    }

    setError("");
    setStep("gender");
  };

  const handlePlayerCreation = (selectedGender: "male" | "female") => {
    let player = findPlayer(name);

    if (!player) {
      player = PlayerCreateHandler.handle(name, selectedGender);
      player = PlayerUpgradeHandler.handle(player);
    }

    setPlayer(player);
    openSidebar();
  };

  return (
    <SceneLayout
      title={`Welcome to ${APP_NAME}`}
      subtitle="The town lies quiet. But something watches in the dark."
      isCentered={true}
      backgroundImage={backgroundImage}
    >
      <div className="space-y-4">
        {step === "name" && (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleNameSubmit()}
              placeholder="Enter your name..."
              className="bg-gray-800 text-white border border-white/20 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white/50"
            />

            <p className="text-sm text-gray-400 text-center mt-2">
              Press <span className="font-semibold text-white">Enter</span> to
              begin your descent.
            </p>
          </>
        )}

        {step === "gender" && (
          <>
            <div className="flex justify-center gap-4">
              <ActionButton
                onClick={() => handlePlayerCreation("male")}
                align="center"
                type="primary"
              >
                Male
              </ActionButton>
              <ActionButton
                onClick={() => handlePlayerCreation("female")}
                align="center"
                type="warning"
              >
                Female
              </ActionButton>
            </div>
          </>
        )}

        {error && <p className="text-red-300 text-sm text-center">{error}</p>}
      </div>
    </SceneLayout>
  );
}
