import React, { memo } from "react";
import "./ArticleList.css";
import {
  Article,
  ArticleView,
  ArticleViewValue,
} from "../../model/type/article";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

type ArticleListProps = {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleViewValue;
};

const getSkeletons = (view: ArticleViewValue) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);
};

export const ArticleList: React.FC<ArticleListProps> = memo(
  ({ className, articles, isLoading, view = ArticleView.SMALL }) => {
    const renderArticle = (article: Article) => (
      <ArticleListItem article={article} view={view} key={article.id} />
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

    return (
      <div
        data-testid="article-list"
        className={classNames("article-list", {}, [className, view])}
      >
        {articles?.length > 0 ? articles.map(renderArticle) : <></>}
      </div>
    );
  }
);

ArticleList.displayName = "ArticleList";
