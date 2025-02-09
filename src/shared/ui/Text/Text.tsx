import { classNames } from "shared/lib/classNames/classNames";
import "./Text.css";
import { AlignItems, TextTheme } from "./textConstants";
import React, { memo } from "react";

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  alignItems?: AlignItems;
}

export const Text: React.FC<ITextProps> = memo(
  ({ className, title, text, theme, alignItems = AlignItems.LEFT }) => {
    return (
      <div
        className={classNames("text-block", {}, [className, theme, alignItems])}
      >
        {title && <p className={"title"}>{title}</p>}
        {text && <p className={"text"}>{text}</p>}
      </div>
    );
  }
);

Text.displayName = "Text";
