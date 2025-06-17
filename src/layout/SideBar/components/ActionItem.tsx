import { type LucideIcon } from "lucide-react";

import { useGame } from "@core/context/GameContext";

import type { SceneComponent } from "@scenes/types";

type ActionItemProps = {
  icon: LucideIcon;
  text: string;
  scene: SceneComponent;
};

export default function ActionItem({
  icon: Icon,
  text,
  scene,
}: ActionItemProps) {
  const { setScene } = useGame();

  return (
    <li
      onClick={() => setScene(scene)}
      className="bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded flex items-center gap-2 cursor-pointer"
    >
      <Icon className="w-4 h-4" />
      {text}
    </li>
  );
}
