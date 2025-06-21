import { useState } from "react";

import Tooltip from "./Componentes/ToolTip";

type ConsumableItemProps = {
  name: string;
  description: string;
  picture: string;
  quantity: number;
};

export default function ConsumableItem({
  name,
  description,
  picture,
  quantity,
}: ConsumableItemProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-12 h-12 bg-gray-800 border border-gray-500 hover:border-gray-400 rounded cursor-pointer transition"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img alt={name} src={picture} className="w-full h-full object-contain" />

      {quantity > 1 && (
        <span className="absolute -bottom-1 -right-1 bg-black text-white text-[10px] px-1 rounded-full border border-black shadow-md">
          {quantity}
        </span>
      )}

      {hover && (
        <Tooltip picture={picture}>
          <p className="font-bold">{name}</p>
          <p className="text-gray-300">{description}</p>
        </Tooltip>
      )}
    </div>
  );
}
