import { classNames } from "shared/lib/classNames/classNames";
import React from "react";

import "./PageLoader.css";
import { Loader } from "shared/ui/Loader/Loader";

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<IPageLoaderProps> = ({ className }) => (
  <div className={classNames("page-loader", {}, [className])}>
    <Loader />
  </div>
);
