import type { ItemRarity } from "@src/modules/items/types/index.type";

export const RARITY_STYLES: Record<
  ItemRarity,
  {
    border: string;
    background: string;
    text: string;
    hoverBorder: string;
  }
> = {
  standard: {
    border: "border-gray-500",
    background: "bg-gray-800",
    text: "text-gray-300",
    hoverBorder: "hover:border-gray-400",
  },
  rare: {
    border: "border-yellow-800",
    background: "bg-yellow-950",
    text: "text-yellow-300",
    hoverBorder: "hover:border-yellow-600",
  },
  epic: {
    border: "border-cyan-500",
    background: "bg-cyan-900",
    text: "text-cyan-300",
    hoverBorder: "hover:border-cyan-400",
  },
};
