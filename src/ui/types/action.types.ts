import type { LucideIcon } from "lucide-react";

import type { UIVariantType, UISizeType, UIDirectionType } from "@ui/theme";

export type ActionBase = {
  align?: UIDirectionType;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: LucideIcon;
  size?: UISizeType;
  type?: UIVariantType;
  width?: string;
};
