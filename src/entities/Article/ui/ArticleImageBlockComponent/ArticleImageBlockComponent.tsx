import React, { memo } from "react";
import "./ArticleImageBlockComponent.css";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleImageBlock } from "entities/Article/model/type/article";
import { Text } from "shared/ui/Text/Text";
import { AlignItems } from "shared/ui/Text/textConstants";
interface IArticleImageBlockComponentrops {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: React.FC<IArticleImageBlockComponentrops> =
  memo(({ className, block }) => {
    return (
      <div
        className={classNames("article-image-block-component", {}, [className])}
      >
        <img src={block.src} alt={block.title} className="img" />
        {block.title && (
          <Text text={block.title} alignItems={AlignItems.CENTER} />
        )}
      </div>
    );
  });

ArticleImageBlockComponent.displayName = "ArticleImageBlockComponent";
