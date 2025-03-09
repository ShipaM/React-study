import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import CopyIcon from "shared/assets/icons/copy-20-20.svg";
import "./Code.css";
import { Button } from "react-study-desygn-system";
import { ButtonTheme } from "../Button/buttonConstants";
import React from "react";

interface ICodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: ICodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames("code", {}, [className])}>
      <Button onClick={onCopy} className="copy-btn" theme={ButtonTheme.CLEAR}>
        <CopyIcon className="copy-icon" />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
Code.displayName = "Code";
