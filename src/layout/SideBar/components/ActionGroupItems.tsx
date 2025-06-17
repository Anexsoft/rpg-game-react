import { useState } from "react";

import { type LucideIcon, ChevronRight } from "lucide-react";

import { useGame } from "@core/context/GameContext";

import type { SceneComponent } from "@scenes/types";

type SubItem = {
  text: string;
  scene: SceneComponent;
};

type ActionItemProps = {
  icon: LucideIcon;
  text: string;
  items: SubItem[];
};

export default function ActionGroupItems({
  icon: Icon,
  text,
  items,
}: ActionItemProps) {
  const { setScene } = useGame();
  const [open, setOpen] = useState(false);

  return (
    <ul className="text-sm text-gray-300 space-y-2">
      <li
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white cursor-pointer select-none"
      >
        <Icon className="w-4 h-4" />
        <span className="flex-1">{text}</span>
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        />
      </li>

      {open && (
        <li>
          <ul className="ml-4 border-l border-gray-600 space-y-1">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-900 text-white border-b border-gray-600 last:border-b-0 text-sm cursor-pointer"
                onClick={() => setScene(item.scene)}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </li>
      )}
    </ul>
  );
}
