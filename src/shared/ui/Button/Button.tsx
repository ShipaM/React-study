/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { classNames, Mods } from "shared/lib/classNames/classNames";
import React, { ButtonHTMLAttributes, memo } from "react";
import "./Button.css";
import { ButtonTheme, ButtonSize } from "./buttonConstants";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = memo(
  ({
    className,
    theme = ButtonTheme.OUTLINE,
    children,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  }) => {
    const mods: Mods = {
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
  }
);
