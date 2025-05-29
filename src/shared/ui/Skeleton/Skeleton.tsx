import React, { CSSProperties } from "react";
import "./Skeleton.css";
import { classNames } from "shared/lib/classNames/classNames";

interface ISkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
  "data-testid"?: string;
}

export const Skeleton: React.FC<ISkeletonProps> = ({
  className,
  height,
  width,
  border,
  "data-testid": dataTestId,
}) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return (
    <div
      style={styles}
      className={classNames("skeleton", {}, [className])}
      data-testid={dataTestId}
    />
  );
};
