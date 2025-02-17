import React from "react";
import "./ArticleCodeBlockComponent.css";
import { classNames } from "shared/lib/classNames/classNames";

interface IArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent: React.FC<
  IArticleCodeBlockComponentProps
> = ({ className }) => {
  return (
    <div className={classNames("article-code", {}, [className])}>
      5555555555555555
    </div>
  );
};
