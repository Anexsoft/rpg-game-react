import { useEffect, useState } from "react";

import { useGame } from "@core/context/GameContext";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import backgroundImage from "@resources/images/scenes/welcome.jpg";

import type { SceneComponent } from "@scenes/types/index.types";

export default function LogoutScene(): SceneComponent {
  const { closeSidebar, logoutPlayer } = useGame();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    closeSidebar();
    logoutPlayer();
  }, [closeSidebar, logoutPlayer]);

  useEffect(() => {
    if (seconds === 0) {
      handleRedirectNow();
      return;
    }

    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const handleRedirectNow = () => {
    window.location.href = "/";
  };

  return (
    <SceneLayout
      title="You have been logged out"
      subtitle="Thank you for playing Silent Evil."
      isCentered={true}
      backgroundImage={backgroundImage}
    >
      <p className="text-gray-200">
        You have successfully logged out. See you again soon!
      </p>
      <p className="text-gray-400 mt-4">
        Redirecting to home in {seconds} second{seconds !== 1 ? "s" : ""}... or{" "}
        <button
          onClick={handleRedirectNow}
          className="underline text-gray-300 hover:text-white transition cursor-pointer"
        >
          click here
        </button>
        .
      </p>
    </SceneLayout>
  );
}
