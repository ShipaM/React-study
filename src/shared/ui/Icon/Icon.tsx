import { classNames } from "shared/lib/classNames/classNames";
import React, { memo } from "react";
import "./Icon.css";

interface IconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg } = props;

  return <Svg className={classNames("icon", {}, [className])} />;
});

Icon.displayName = "Icon";
