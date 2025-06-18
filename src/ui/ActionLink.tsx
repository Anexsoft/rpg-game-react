import React from "react";

import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { ActionDisabledCssClass, ActionVariantsCssClass } from "./defs/actions";
import { type UiVariant } from "./defs/ui-variants";

type ActionLinkProps = {
  to: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  type?: UiVariant;
  disabled?: boolean;
};

const ActionLink: React.FC<ActionLinkProps> = ({
  to,
  icon: Icon,
  children,
  type = "default",
  disabled = false,
}) => {
  const classes = ` ${ActionVariantsCssClass[type as UiVariant]} ${
    disabled ? ActionDisabledCssClass : ""
  }`;

  if (disabled) {
    return (
      <div className={classes}>
        {Icon && <Icon />}
        <span>{children}</span>
      </div>
    );
  }

  return (
    <Link to={to} className={classes}>
      {Icon && <Icon />}
      <span>{children}</span>
    </Link>
  );
};

export default ActionLink;
