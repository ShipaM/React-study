import React, { HTMLAttributeAnchorTarget, memo } from "react";
import "./ArticleList.css";
import {
  Article,
  ArticleView,
  ArticleViewValue,
} from "../../model/type/article";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { Text } from "shared/ui/Text/Text";
import { TextSize } from "shared/ui/Text/textConstants";
import { useTranslation } from "react-i18next";

type ArticleListProps = {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleViewValue;
  target?: HTMLAttributeAnchorTarget;
};

const getSkeletons = (view: ArticleViewValue) => {
  return new Array(view === ArticleView.SMALL ? 8 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);
};

export const ArticleList: React.FC<ArticleListProps> = memo(
  ({ className, articles, isLoading, view = ArticleView.SMALL, target }) => {
    const { t } = useTranslation("article");
    const renderArticle = (article: Article) => (
      <ArticleListItem
        article={article}
        view={view}
        key={article.id}
        target={target}
      />
    );

    if (isLoading) {
      return (
        <div
          data-testid="article-list-skeleton"
          className={classNames("article-list", {}, [className, view])}
        >
          {getSkeletons(view)}
        </div>
      );
    }

    if (!isLoading && !articles.length) {
      return (
        <div
          data-testid="no-article-list"
          className={classNames("article-list", {}, [className, view])}
        >
          <Text size={TextSize.L} title={t("NO_ARTICLES")} />
        </div>
      );
    }

    return (
      <div
        data-testid="article-list"
        className={classNames("article-list", {}, [className, view])}
      >
        {articles?.length > 0 ? articles.map(renderArticle) : <></>}
        {isLoading && (
          <div data-testid="article-list-skeleton">{getSkeletons(view)}</div>
        )}
      </div>
    );
  }
);

ArticleList.displayName = "ArticleList";
