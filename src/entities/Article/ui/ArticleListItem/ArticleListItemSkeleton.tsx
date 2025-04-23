import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Card } from "shared/ui/Card/Card";
import {
  ArticleView,
  ArticleViewValue,
} from "entities/Article/model/type/article";
import React from "react";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleViewValue;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
      return (
        <div
          data-testid="article-listItem-skeleton-big"
          className={classNames("article-list-item", {}, [className, view])}
        >
          <Card className="article-list-card">
            <div className="article-list-card-header">
              <Skeleton border="50%" height={30} width={30} />
              <Skeleton
                width={150}
                height={16}
                className={"article-list-card-user-name"}
              />
              <Skeleton
                width={150}
                height={16}
                className={"article-list-card-date"}
              />
            </div>
            <Skeleton
              width={250}
              height={24}
              className={"article-list-card-title"}
            />
            <Skeleton height={600} className={"article-img"} />
            <div className={"footer"}>
              <Skeleton height={36} width={200} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        data-testid="article-listItem-skeleton-small"
        className={classNames("article-list-item", {}, [className, view])}
      >
        <Card className={"article-list-card"}>
          <div className={"image-wrapper"}>
            <Skeleton
              width={300}
              height={300}
              className={"article-list-card-img"}
            />
          </div>
          <div className={"info-wrapper"}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton
            width={150}
            height={16}
            className={"article-list-card-title"}
          />
        </Card>
      </div>
    );
  }
);

ArticleListItemSkeleton.displayName = "ArticleListItemSkeleton";
