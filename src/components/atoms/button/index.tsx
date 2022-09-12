import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { mapModifiers, ModifierProp } from "libs/component";

type InheritedProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "onClick"
> &
  Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "onClick" | "disabled"
  >;

export interface ButtonProps extends InheritedProps {
  children: React.ReactNode;
  buttonType?: ModifierProp<
    | "primary"
    | "secondary"
    | "hover"
    | "focus"
    | "save"
    | "reset"
    | "view"
    | "edit"
    | "delete"
  >;
  size?: "large" | "medium" | "small";
  className?: string;
  isPadding?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  buttonType,
  size,
  children,
  type,
  disabled = false,
  className: additionalClassName = "",
  isPadding = false,
}) => {
  const componentClassName = mapModifiers(
    "a-button",
    buttonType,
    size,
    isPadding && "padding"
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};
