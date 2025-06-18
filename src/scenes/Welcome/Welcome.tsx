import SceneLayout from "@layout/SceneLayout/SceneLayout";

import backgroundImage from "@resources/images/scenes/welcome.jpg";

import type { SceneComponent } from "@scenes/types";

export default function WelcomeScene(): SceneComponent {
  return (
    <SceneLayout
      title="Welcome to Arcane Times"
      subtitle="A world of ancient magic, forgotten secrets, and battles yet to come."
      isCentered={true}
      backgroundImage={backgroundImage}
    >
      <p className="text-gray-200 text-sm">
        Begin your journey... from the tavern or by hunting enemies in the
        forest.
      </p>
    </SceneLayout>
  );
}
