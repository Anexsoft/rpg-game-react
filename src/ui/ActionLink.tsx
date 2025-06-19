import React from "react";

import { Link } from "react-router-dom";

import {
  ActionDisabledCssClass,
  ActionVariantsCssClass,
  ActionSizeCssClass,
  ActionAlignCssClass,
  ActionIconSizeClass,
} from "./theme/actions";
import type { ActionBase } from "./types/action.types";

type ActionLinkProps = {
  to: string;
} & ActionBase;

const ActionLink: React.FC<ActionLinkProps> = ({
  to,
  icon: Icon,
  children,
  type = "default",
  disabled = false,
  size = "medium",
  align = "left",
}) => {
  const variantClass = ActionVariantsCssClass[type];
  const iconSizeClass = ActionIconSizeClass[size];
  const sizeClass = ActionSizeCssClass[size];
  const alignClass = ActionAlignCssClass[align];
  const disabledClass = disabled ? ActionDisabledCssClass : "";

  const classes = `${variantClass} ${sizeClass} ${alignClass} ${disabledClass}`;

  const content = (
    <>
      {Icon && <Icon className={iconSizeClass} />}
      <span>{children}</span>
    </>
  );

  return disabled ? (
    <div className={classes}>{content}</div>
  ) : (
    <Link to={to} className={classes}>
      {content}
    </Link>
  );
};

export default ActionLink;
