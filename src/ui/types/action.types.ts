import type { LucideIcon } from "lucide-react";

import type { UIVariantType, UISizeType, UIDirectionType } from "@ui/theme";

export type ActionBase = {
  icon?: LucideIcon;
  children?: React.ReactNode;
  type?: UIVariantType;
  disabled?: boolean;
  size?: UISizeType;
  align?: UIDirectionType;
};
