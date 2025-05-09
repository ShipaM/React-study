import React, { HTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./Card.css";
import { CardTheme } from "./cardConstants";

type CardProps = {
  className?: string;
  children: React.ReactNode;
  theme?: CardTheme;
} & HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({
  className,
  children,
  theme = CardTheme.NORMAL,
  ...otherProps
}) => {
  return (
    <div
      data-testid="card"
      {...otherProps}
      className={classNames("card", {}, [className, theme])}
    >
      {children}
    </div>
  );
};
