import { classNames } from "shared/lib/classNames/classNames";
import React, { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import "./ArticleTextBlockComponent.css";
import { ArticleTextBlock } from "../../model/type/article";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    return (
      <div
        className={classNames("article-text-block-component", {}, [className])}
      >
        {block.title && <Text title={block.title} className="title" />}
        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} text={paragraph} className="paragraph" />
        ))}
      </div>
    );
  }
);
ArticleTextBlockComponent.displayName = "ArticleTextBlockComponent";
