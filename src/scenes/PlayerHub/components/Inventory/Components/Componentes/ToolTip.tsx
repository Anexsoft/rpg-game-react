import type { ReactNode } from "react";

type TooltipProps = {
  picture: string;
  children: ReactNode;
};

export default function Tooltip({ picture, children }: TooltipProps) {
  return (
    <div className="absolute z-10 bottom-full mb-2 w-100 p-2 rounded bg-black text-white text-xs border border-dashed border-gray-600 shadow-xl opacity-90 flex gap-3">
      <img
        src={picture}
        alt="Item"
        className="w-20 h-20 rounded object-contain border border-gray-700"
      />
      <div className="space-y-1">{children}</div>
    </div>
  );
}
