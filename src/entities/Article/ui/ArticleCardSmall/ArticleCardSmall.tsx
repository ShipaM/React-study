import { Article, ArticleViewValue } from "entities/Article/model/type/article";
import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card/Card";
import { Icon } from "shared/ui/Icon/Icon";
import { Text } from "shared/ui/Text/Text";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";

type ArticleListItemProps = {
  className?: string;
  article: Article;
  view?: ArticleViewValue;
};
export const ArticleCardSmall: React.FC<ArticleListItemProps> = memo(
  ({ className, article, view }) => {
    return (
      <div
        data-testid="article-card-small"
        className={classNames("article-list-item", {}, [className, view])}
      >
        <Card className="article-list-card">
          <div className="image-wrapper">
            <img
              src={article.img}
              className="article-list-card-img"
              alt="article-img"
            />
            <Text text={article.createdAt} className="article-list-card-date" />
          </div>
          <div className="info-wrapper">
            <Text
              text={article.type.join(", ")}
              className="article-list-card-types"
            />
            <Text
              text={String(article.views)}
              className="article-list-card-views"
            />
            <Icon Svg={EyeIcon} />
          </div>
          <Text text={article.title} className="article-list-card-title" />
        </Card>
      </div>
    );
  }
);

ArticleCardSmall.displayName = "ArticleCardSmall";
