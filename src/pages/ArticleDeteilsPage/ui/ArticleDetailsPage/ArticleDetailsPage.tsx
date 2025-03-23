import React, { useCallback } from "react";
import "./ArticleDetailsPage.css";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slices/articleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoaading } from "../../model/selectors/comment";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "pages/ArticleDeteilsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { AddCommentFormAsync } from "features/AddCommentForm";
import { addCommentForArticle } from "pages/ArticleDeteilsPage/model/services/addCommentForArticle/addCommentForArticle";

interface IArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = ({
  className,
}) => {
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const dispatch = useAppDispatch();
  const commentsIsLoading = useSelector(getArticleCommentsIsLoaading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id)
    return (
      <div className={classNames("article-details-page", {}, [className])}>
        {t("ARTICLE_NOT_FOUND")}
      </div>
    );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames("article-details-page", {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t("COMMENTS")} />
        <AddCommentFormAsync onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
