import { useState } from "react";

import { Check } from "lucide-react";

import { RARITY_STYLES } from "@ui/theme/rarity";

import type { WeaponTarget } from "@player/handlers/player-calculate-damage.handler";

import type { Weapon } from "@weapons/types/index.type";

import Tooltip from "./Componentes/ToolTip";

type WeaponItemProps = {
  item: Weapon;
  onClick?: () => void;
  selected?: boolean;
  quantity: number;
};

function renderWeaponTooltip(target: WeaponTarget) {
  const dmg = Math.round(target.damageMultiplier * 100);

  switch (target.type) {
    case "single":
      return <>Deals {dmg}% of total damage to 1 target</>;

    case "multiple":
      return (
        <>
          Deals {dmg}% of total damage to up to {target.targets} targets
        </>
      );

    case "random":
      return (
        <>
          Deals {dmg}% of total damage to {target.targets} random targets
        </>
      );
  }
}

export default function WeaponItem({
  item,
  onClick,
  selected = false,
  quantity,
}: WeaponItemProps) {
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
            {item.target && renderWeaponTooltip(item.target)}
          </p>
        </Tooltip>
      )}
    </div>
  );
}
