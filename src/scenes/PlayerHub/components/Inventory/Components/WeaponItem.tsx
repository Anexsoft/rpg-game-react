import { useState } from "react";

import { Check, Crosshair, Sword } from "lucide-react";

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
          <p className={`${style.text} capitalize`}>{item.rarity}</p>
          <p className="mt-1 text-gray-300">{item.description}</p>
          <ul className="mt-2 text-gray-400 list-disc list-inside">
            <li className="flex items-center gap-2">
              <Sword className="text-red-400 w-4" />
              <span>+{item.dmg}dmg</span>
            </li>
            <li className="flex items-center gap-2">
              <Crosshair className="text-blue-400 w-4" />
              <span>{renderWeaponTooltip(item.target)}</span>
            </li>
          </ul>
        </Tooltip>
      )}
    </div>
  );
}
