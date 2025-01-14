import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.css";
import React from "react";

interface ILoaderProps {
  className?: string;
}

export const Loader: React.FC<ILoaderProps> = ({ className }) => (
  <div className={classNames("lds-ellipsis", {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
