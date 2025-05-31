import { classNames } from "shared/lib/classNames/classNames";
import "./Text.css";
import { AlignItems, TextSize, TextTheme } from "./textConstants";
import React, { memo } from "react";

type TextProps = {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  alignItems?: AlignItems;
  size?: TextSize;
};

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: "h3",
  [TextSize.M]: "h2",
  [TextSize.L]: "h1",
};

export const Text: React.FC<TextProps> = memo(
  ({
    className,
    title,
    text,
    theme,
    alignItems = AlignItems.LEFT,
    size = TextSize.M,
  }) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    return (
      <div
        className={classNames("text-block", {}, [
          className,
          theme,
          alignItems,
          size,
        ])}
      >
        {title && <HeaderTag className={"title"}>{title}</HeaderTag>}
        {text && <p className={"text"}>{text}</p>}
      </div>
    );
  }
);

Text.displayName = "Text";
