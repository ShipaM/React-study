import React from "react";
import "./ArticleCodeBlockComponent.css";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleCodeBlock } from "entities/Article/model/type/article";
import { Code } from "shared/ui/Code/Code";

interface IArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: React.FC<
  IArticleCodeBlockComponentProps
> = ({ className, block }) => {
  return (
    <div
      className={classNames("article-code-block-component", {}, [className])}
    >
      <Code text={block.code} />
    </div>
  );
};
