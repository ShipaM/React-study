import React, { memo, useCallback } from "react";
import "./ArticleListItem.css";
import { Text } from "shared/ui/Text/Text";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
  ArticleViewValue,
} from "../../model/type/article";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { ArticleCardBig } from "../ArticleCardBig/ArticleCardBig";
import { ArticleCardSmall } from "../ArticleCardSmall/ArticleCardSmall";

type ArticleListItemProps = {
  className?: string;
  article: Article;
  view?: ArticleViewValue;
};

export const ArticleListItem: React.FC<ArticleListItemProps> = memo(
  ({ article, view }) => {
    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
      navigate(RoutePath["article-details"] + article.id);
    }, [article.id, navigate]);

    const types = (
      <Text
        text={article.type.join(", ")}
        className="article-list-card-types"
      />
    );

    const views = (
      <>
        <Text
          text={String(article.views)}
          className="article-list-card-views"
        />
        <Icon Svg={EyeIcon} />
      </>
    );

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock;
      return (
        <ArticleCardBig
          article={article}
          view={view}
          views={views}
          types={types}
          onOpenArticle={onOpenArticle}
          textBlock={textBlock}
        />
      );
    }

    return <ArticleCardSmall article={article} view={view} />;
  }
);

ArticleListItem.displayName = "ArticleListItem";
