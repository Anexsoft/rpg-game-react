import { useState } from "react";

import { Check } from "lucide-react";

import { RARITY_STYLES } from "@ui/theme/rarity";

import type { Armor } from "@armor/types/index.type";

import Tooltip from "./Componentes/ToolTip";

type ArmorItemProps = {
  item: Armor;
  onClick?: () => void;
  selected?: boolean;
  quantity: number;
};

export default function ArmorItem({
  item,
  onClick,
  selected = false,
  quantity,
}: ArmorItemProps) {
  const style = RARITY_STYLES[item.rarity];
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative w-12 h-12 ${style.background} border ${style.border} ${style.hoverBorder} rounded cursor-pointer transition`}
    >
      <img
        alt={item.name}
        src={item.picture}
        className="relative w-12 h-12 bg-gray-800 border border-gray-500 hover:border-gray-400 rounded cursor-pointer transition"
      />

      {selected && (
        <div className="absolute -top-1 -left-1 bg-black rounded-full p-[2px] border border-black">
          <Check size={12} className="text-green-400" />
        </div>
      )}

      {quantity > 1 && (
        <span className="absolute -bottom-1 -right-1 bg-black text-white text-[10px] px-1 rounded-full border border-black shadow-md">
          {quantity}
        </span>
      )}

      {hover && (
        <Tooltip picture={item.picture}>
          <p className="font-bold">{item.name}</p>
          <p className={`${style.text} capitalize`}>{item.rarity}</p>
          <p className="mt-1 text-gray-300">{item.description}</p>
          <p className="mt-1 italic text-xs text-gray-400">
            Reduces incoming damage by {Math.round(item.def * 100)}%
          </p>
        </Tooltip>
      )}
    </div>
  );
}
