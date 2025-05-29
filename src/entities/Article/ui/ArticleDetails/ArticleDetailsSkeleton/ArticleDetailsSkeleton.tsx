import React from "react";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { VStack } from "shared/ui/Stack";

export const ArticleDetailsSkeleton: React.FC = () => {
  return (
    <VStack max align="start" data-testid="article-details-skeleton">
      <VStack max align="center">
        <Skeleton
          width={200}
          height={200}
          border={"50%"}
          data-testid="avatar-skeleton"
        />
      </VStack>
      <Skeleton width={160} height={40} />
      <Skeleton width={370} height={32} />
      <Skeleton width={80} height={24} />
      <Skeleton width={124} height={24} />
      <Skeleton width={280} height={32} />
      <Skeleton width={"100%"} height={200} />
      <Skeleton width={"100%"} height={200} />
    </VStack>
  );
};
