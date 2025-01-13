import React from "react";
import "./AppLink.css";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface IAppLink extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<IAppLink> = ({
  className,
  theme = AppLinkTheme.PRIMARY,
  children,
  to,
  ...otherProps
}) => {
  return (
    <Link
      to={to}
      className={classNames("app-link", {}, [className, theme])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
