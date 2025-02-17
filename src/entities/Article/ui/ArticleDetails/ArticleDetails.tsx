import React, { memo, useEffect } from "react";
import "./ArticleDetails.css";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useSelector } from "react-redux";
import {
  // getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { AlignItems } from "shared/ui/Text/textConstants";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface IArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: React.FC<IArticleDetailsProps> = memo(
  ({ className, id }) => {
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    // const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
      dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
      content = (
        <div>
          <Skeleton
            className="avatar"
            width={200}
            height={200}
            border={"50%"}
          />
          <Skeleton className="title" width={300} height={32} />
          <Skeleton width={600} height={24} />
          <Skeleton width={"100%"} height={200} />
          <Skeleton width={"100%"} height={200} />
        </div>
      );
    } else if (error) {
      content = (
        <Text alignItems={AlignItems.CENTER} title={t("ARTICLE_ERROR")} />
      );
    } else {
      content = <div>{t("ARTICLE_DETEILS")}</div>;
    }
    return (
      <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
        <div className={classNames("article-details", {}, [className])}>
          {content}
        </div>
      </DynamicModuleLoader>
    );
  }
);

ArticleDetails.displayName = "ArticleDetails";
