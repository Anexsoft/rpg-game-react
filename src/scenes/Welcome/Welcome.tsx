import { APP_NAME } from "@core/config";

import SceneLayout from "@layout/SceneLayout/SceneLayout";

import backgroundImage from "@resources/images/scenes/welcome.jpg";

import type { SceneComponent } from "@scenes/types/index.types";

export default function WelcomeScene(): SceneComponent {
  return (
    <SceneLayout
      title={`Welcome to ${APP_NAME}`}
      subtitle="Something isn't right. This place was abandoned... or so they said."
      isCentered={true}
      backgroundImage={backgroundImage}
    >
      <p className="text-gray-200 text-sm">
        Explore the remains of the town, uncover what lies beneath the
        silence... and try to survive.
      </p>
    </SceneLayout>
  );
}
