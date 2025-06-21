import React from "react";

import {
  ActionDisabledCssClass,
  ActionVariantsCssClass,
  ActionSizeCssClass,
  ActionAlignCssClass,
  ActionIconSizeClass,
} from "./theme/actions";
import type { ActionBase } from "./types/action.types";

type ActionButtonProps = {
  onClick: () => void;
} & ActionBase;

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  icon: Icon,
  children,
  type = "default",
  disabled = false,
  size = "medium",
  align = "center",
  width = "full",
}) => {
  const variantClass = ActionVariantsCssClass[type];
  const iconSizeClass = ActionIconSizeClass[size];
  const sizeClass = ActionSizeCssClass[size];
  const alignClass = ActionAlignCssClass[align];
  const disabledClass = disabled ? ActionDisabledCssClass : "";

  const classes = `${variantClass} ${sizeClass} ${alignClass} ${disabledClass} w-${width}`;

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {Icon && <Icon className={iconSizeClass} />}
      <span>{children}</span>
    </button>
  );
};

export default ActionButton;
