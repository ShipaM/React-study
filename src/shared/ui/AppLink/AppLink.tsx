/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo } from "react";
import "./AppLink.css";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLinkTheme } from "./appLinkConstants";

interface IAppLink extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<IAppLink> = memo(
  ({ className, children, to, ...otherProps }) => {
    return (
      <Link
        to={to}
        className={classNames("app-link", {}, [className])}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
);
