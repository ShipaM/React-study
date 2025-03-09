import React from "react";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

export const ArticleDetailsSkeleton: React.FC = () => {
  return (
    <div
      className="article-details-skeleton"
      data-testId="article-details-skeleton"
    >
      <Skeleton className="avatar" width={200} height={200} border={"50%"} />
      <Skeleton className="title" width={300} height={32} />
      <Skeleton width={600} height={24} />
      <Skeleton width={"100%"} height={200} />
      <Skeleton width={"100%"} height={200} />
    </div>
  );
};
