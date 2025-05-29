import { classNames, Mods } from "shared/lib/classNames/classNames";
import React from "react";
import { ReactNode } from "react";
import "./Flex.css";
import {
  FlexJustify,
  FlexAlign,
  FlexDirection,
  FlexGap,
  justifyClasses,
  alignClasses,
  directionClasses,
  gapClasses,
} from "./constants";

export type FlexProps = {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  "data-testid"?: string;
};

export const Flex = ({
  className,
  children,
  justify = "start",
  align = "center",
  direction = "row",
  gap,
  max,
  "data-testid": dataTestId,
}: FlexProps) => {
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    ["max"]: max,
  };

  return <div data-testid={dataTestId} className={classNames("flex", mods, classes)}>{children}</div>;
};
