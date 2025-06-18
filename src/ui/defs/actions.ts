import type { UiVariant } from "./ui-variants";

const ActionVariantsCssClassBase =
  "w-full p-3 rounded-md flex items-center gap-2 text-left cursor-pointer";

export const ActionVariantsCssClass: Record<UiVariant | "default", string> = {
  default: `${ActionVariantsCssClassBase} bg-gray-700 hover:bg-gray-600`,
  primary: `${ActionVariantsCssClassBase} bg-blue-600 hover:bg-blue-500`,
  warning: `${ActionVariantsCssClassBase} bg-yellow-500 hover:bg-yellow-400`,
  danger: `${ActionVariantsCssClassBase} bg-red-600 hover:bg-red-500`,
};

export const ActionDisabledCssClass =
  "opacity-50 cursor-not-allowed pointer-events-none";
