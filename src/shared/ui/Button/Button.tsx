import { classNames } from "shared/lib/classNames/classNames";
import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

export enum ButtonSize {
  M = "size-m",
  L = "size-l",
  XL = "size-xl",
}

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clear-inverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background-inverted",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  theme,
  children,
  square,
  disabled,
  size = ButtonSize.M,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    ["square"]: square,
    ["disabled"]: disabled,
  };

  return (
    <button
      disabled={disabled}
      className={classNames("button", mods, [className, theme, size])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
