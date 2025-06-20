import { useState } from "react";

import { Check } from "lucide-react";

import { RARITY_STYLES } from "@ui/theme/rarity";

import type { ItemRarity } from "@src/modules/items/types/index.type";

import Tooltip from "./Componentes/ToolTip";

type BattleItemProps = {
  rarity: ItemRarity;
  name: string;
  description: string;
  picture: string;
  onClick?: () => void;
  selected?: boolean;
  quantity: number;
};

export default function BattleItem({
  name,
  description,
  picture,
  rarity,
  onClick,
  selected = false,
  quantity,
}: BattleItemProps) {
  const style = RARITY_STYLES[rarity];
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative w-12 h-12 ${style.background} border ${style.border} ${style.hoverBorder} rounded cursor-pointer transition`}
    >
      <img
        alt={name}
        src={picture}
        className="relative w-12 h-12 bg-gray-800 border border-gray-500 hover:border-gray-400 rounded cursor-pointer transition"
      />

      {/* Checkmark */}
      {selected && (
        <div className="absolute -top-1 -left-1 bg-black rounded-full p-[2px] border border-black">
          <Check size={12} className="text-green-400" />
        </div>
      )}

      {/* Quantity */}
      {quantity > 1 && (
        <span className="absolute -bottom-1 -right-1 bg-black text-white text-[10px] px-1 rounded-full border border-black shadow-md">
          {quantity}
        </span>
      )}

      {/* Tooltip */}
      {hover && (
        <Tooltip picture={picture}>
          <p className="font-bold">{name}</p>
          <p className="text-gray-300">{description}</p>
          <p className={`${style.text} mt-1 italic capitalize`}>{rarity}</p>
        </Tooltip>
      )}
    </div>
  );
}
