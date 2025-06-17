import SceneLayout from "@layout/SceneLayout/SceneLayout";

export default function ExistingPlayerSignedIn() {
  return (
    <SceneLayout
      title="Welcome to Arcane Times"
      subtitle="A world of ancient magic, forgotten secrets, and battles yet to come."
    >
      <p className="text-gray-500 text-sm">
        Begin your journey... from the tavern or by hunting enemies in the
        forest.
      </p>
    </SceneLayout>
  );
}
