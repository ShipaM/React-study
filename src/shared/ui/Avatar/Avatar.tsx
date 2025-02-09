import React, { CSSProperties, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./Avatar.css";

interface IAvatarProps {
  src?: string;
  className?: string;
  size?: number;
  alt?: string;
}

export const Avatar: React.FC<IAvatarProps> = ({
  src,
  className,
  alt,
  size,
}) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );
  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames("avatar", {}, [className])}
    />
  );
};
