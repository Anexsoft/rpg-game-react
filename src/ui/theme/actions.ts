import type { UIDirectionType, UISizeType, UIVariantType } from ".";

const ActionVariantsCssBaseClass =
  "bg-gray-950 p-3 rounded-md flex items-center gap-2 text-left cursor-pointer border";

export const ActionVariantsCssClass: Record<UIVariantType, string> = {
  default: `${ActionVariantsCssBaseClass} border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white`,
  primary: `${ActionVariantsCssBaseClass} border-blue-600 text-blue-400 hover:border-blue-400 hover:text-blue-300`,
  warning: `${ActionVariantsCssBaseClass} border-yellow-600 text-yellow-400 hover:border-yellow-400 hover:text-yellow-300`,
  danger: `${ActionVariantsCssBaseClass} border-red-600 text-red-400 hover:border-red-400 hover:text-red-300`,
};

export const ActionSizeCssClass: Record<UISizeType, string> = {
  small: "text-sm py-2 px-3",
  medium: "text-base py-3 px-4",
  large: "text-lg py-4 px-5",
};

export const ActionAlignCssClass: Record<UIDirectionType, string> = {
  left: "text-left justify-start",
  center: "text-center justify-center",
  right: "text-right justify-end",
};

export const ActionDisabledCssClass =
  "opacity-50 cursor-not-allowed pointer-events-none";

export const ActionIconSizeClass: Record<UISizeType, string> = {
  small: "h-4",
  medium: "h-5",
  large: "h-6",
};
