import React from "react";
import "./ArticleImageBlockComponent.css";
import { classNames } from "shared/lib/classNames/classNames";

interface IArticleImageBlockComponentrops {
  className?: string;
}

export const ArticleImageBlockComponent: React.FC<
  IArticleImageBlockComponentrops
> = ({ className }) => {
  return (
    <div className={classNames("article-image", {}, [className])}>123</div>
  );
};
