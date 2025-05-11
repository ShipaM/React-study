import React, { HTMLAttributeAnchorTarget, memo } from "react";
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
import { ArticleCardBig } from "../ArticleCardBig/ArticleCardBig";
import { ArticleCardSmall } from "../ArticleCardSmall/ArticleCardSmall";

type ArticleListItemProps = {
  className?: string;
  article: Article;
  view?: ArticleViewValue;
  target?: HTMLAttributeAnchorTarget;
};

export const ArticleListItem: React.FC<ArticleListItemProps> = memo(
  ({ article, view, target }) => {
    // const navigate = useNavigate();
    // const onOpenArticle = useCallback(() => {
    //   navigate(RoutePath.article_details] + article.id);
    // }, [article.id, navigate]);

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
          textBlock={textBlock}
          target={target}
        />
      );
    }

    return <ArticleCardSmall article={article} view={view} target={target} />;
  }
);

ArticleListItem.displayName = "ArticleListItem";
