export default function ExistingPlayerSignedIn() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-4xl font-bold text-yellow-400">
        Welcome to Arcane Times
      </h1>

      <p className="text-gray-400 text-lg max-w-xl">
        A world of ancient magic, forgotten secrets, and battles yet to come.
      </p>

      <p className="text-gray-500 text-sm">
        Begin your journey... from the tavern or by hunting enemies in the
        forest.
      </p>
    </div>
  );
}
