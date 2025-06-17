import { useGame } from "@core/context/GameContext";

import SideBar from "./SideBar/SideBar";

export default function Layout() {
  const { isSidebarOpen, scene } = useGame();

  return (
    <div className="w-full min-h-screen flex bg-gray-900 text-white">
      {isSidebarOpen && (
        <aside className="w-72 bg-gray-800">
          <SideBar />
        </aside>
      )}

      <main className={`flex-1  bg-gray-900 ${!isSidebarOpen ? "w-full" : ""}`}>
        {scene}
      </main>
    </div>
  );
}
