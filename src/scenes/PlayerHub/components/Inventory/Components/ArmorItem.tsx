import { useState } from "react";

import { Check, Info, Shield } from "lucide-react";

import Rarity from "@shared/components/Rarity";

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
      <img alt={item.name} src={item.picture} />

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
          <Rarity rarity={item.rarity} />
          <p className="mt-1 text-gray-300">{item.description}</p>
          <ul className="mt-2 text-gray-400 list-disc list-inside">
            <li className="flex items-center gap-2">
              <Shield className="text-blue-400 w-4" />
              <span>+{(item.def * 100).toFixed(1)}%</span>
            </li>
            <li className="flex items-center gap-2">
              <Info className="w-4" />
              Reduces incoming damage by {(item.def * 100).toFixed(1)}%
            </li>
          </ul>
        </Tooltip>
      )}
    </div>
  );
}
