import React, { HTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./Card.css";

type CardProps = {
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export const Card: React.FC<CardProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <div
      data-testid="card"
      {...otherProps}
      className={classNames("card", {}, [className])}
    >
      {children}
    </div>
  );
};
