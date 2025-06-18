import { ReactNode } from "react";

import { useGame } from "@core/context/GameContext";

import SideBar from "./SideBar/SideBar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { isSidebarOpen } = useGame();

  return (
    <div className="w-full min-h-screen flex bg-gray-900 text-white">
      {isSidebarOpen && (
        <aside className="w-72 bg-gray-800">
          <SideBar />
        </aside>
      )}

      <main className={`flex-1 bg-gray-900 ${!isSidebarOpen ? "w-full" : ""}`}>
        {children}
      </main>
    </div>
  );
}
