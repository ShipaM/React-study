import { classNames } from "shared/lib/classNames/classNames";
import "./Text.css";
import { TextTheme } from "./textConstants";
import React from "react";

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: React.FC<ITextProps> = ({
  className,
  title,
  text,
  theme,
}) => {
  return (
    <div className={classNames("Text", {}, [className, theme])}>
      {title && <p className={"title"}>{title}</p>}
      {text && <p className={"text"}>{text}</p>}
    </div>
  );
};
