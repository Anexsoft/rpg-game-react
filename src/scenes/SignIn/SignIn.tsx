import { useState } from "react";

import { APP_NAME } from "@core/config";
import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import ActionButton from "@ui/ActionButton";

import backgroundImage from "@resources/images/scenes/welcome.jpg";

import { PlayerCreateHandler } from "@player/handlers/player-create.handler";
import { PlayerUpgradeHandler } from "@player/handlers/player-upgrade.handler";
import { STAT_PROFILES, type StatProfileName } from "@player/profile";

export default function SignInScene() {
  const { setPlayer, openSidebar, findPlayer } = useGame();
  const [step, setStep] = useState<"name" | "gender" | "profile">("name");
  const [name, setName] = useState("");
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [error, setError] = useState("");

  const handleNameSubmit = () => {
    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters.");
      return;
    }
    setError("");
    setStep("gender");
  };

  const handleGenderSelection = (selectedGender: "male" | "female") => {
    setGender(selectedGender);
    setStep("profile");
  };

  const handlePlayerCreation = (selectedProfile: StatProfileName) => {
    if (!gender) return;

    let player = findPlayer(name);

    if (!player) {
      player = PlayerCreateHandler.handle(name, gender, selectedProfile);
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
          <div className="flex justify-center gap-4">
            <ActionButton
              onClick={() => handleGenderSelection("male")}
              align="center"
              type="primary"
            >
              Male
            </ActionButton>
            <ActionButton
              onClick={() => handleGenderSelection("female")}
              align="center"
              type="warning"
            >
              Female
            </ActionButton>
          </div>
        )}

        {step === "profile" && (
          <>
            <p className="text-center text-white text-lg mb-2">
              Choose your class
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(STAT_PROFILES).map(([key, statProfile]) => (
                <button
                  key={key}
                  onClick={() => handlePlayerCreation(key as StatProfileName)}
                  className="border px-4 py-3 rounded text-left text-white transition-all duration-200 hover:border-cyan-400 cursor-pointer"
                >
                  <h4 className="font-bold text-base mb-1">
                    {statProfile.name}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {statProfile.description}
                  </p>
                </button>
              ))}
            </div>
          </>
        )}

        {error && <p className="text-red-300 text-sm text-center">{error}</p>}
      </div>
    </SceneLayout>
  );
}
