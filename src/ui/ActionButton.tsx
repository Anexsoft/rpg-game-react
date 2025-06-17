import React from "react";

import type { LucideIcon } from "lucide-react";

import type { UiVariant } from "./types/ui-variant.type";

type ActionButtonProps = {
  onClick?: () => void;
  icon?: LucideIcon;
  children?: React.ReactNode;
  type?: UiVariant;
  disabled?: boolean;
};

const typeClasses: Record<UiVariant | "default", string> = {
  default: "bg-gray-700 hover:bg-gray-600",
  primary: "bg-blue-600 hover:bg-blue-500",
  warning: "bg-yellow-500 hover:bg-yellow-400",
  danger: "bg-red-600 hover:bg-red-500",
};

const disabledClasses = "opacity-50 cursor-not-allowed pointer-events-none";

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  icon: Icon,
  children,
  type = "default",
  disabled = false,
}) => {
  const btnType = (type in typeClasses ? type : "default") as
    | UiVariant
    | "default";

  return (
    <button
      className={`w-full p-3 ${
        typeClasses[btnType]
      } rounded-md flex items-center gap-2 text-left cursor-pointer ${
        disabled ? disabledClasses : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon />}
      <span>{children}</span>
    </button>
  );
};

export default ActionButton;
