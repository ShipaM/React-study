import React, { useCallback } from "react";
import "./ArticleDetailsPage.css";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { ArticleDetails, ArticleList } from "entities/Article";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoaading } from "../../model/selectors/comment";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AddCommentFormAsync } from "features/AddCommentForm";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Button } from "shared/ui/Button/Button";
import { ButtonTheme } from "shared/ui/Button/buttonConstants";
import { Page } from "widgets/Page";
import { getArticleRecommendations } from "pages/ArticleDeteilsPage/model/slices/articleDetailsPageRecommendationsSlice";
import { getArticleRecommendationsIsLoading } from "pages/ArticleDeteilsPage/model/selectors/recommendations";
import { TextSize } from "shared/ui/Text/textConstants";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecomendations/fetchArticleRecomendations";
import { articleDetailsPageReducer } from "pages/ArticleDeteilsPage/model/slices";

interface IArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  // articleDetailsComments: articleDetailsCommentsReducer,
  // ArticleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = ({
  className,
}) => {
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const recomendations = useSelector(getArticleRecommendations.selectAll);
  const dispatch = useAppDispatch();
  const commentsIsLoading = useSelector(getArticleCommentsIsLoaading);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id)
    return (
      <div className={classNames("article-details-page", {}, [className])}>
        {t("ARTICLE_NOT_FOUND")}
      </div>
    );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames("article-details-page", {}, [className])}>
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={() => window.history.back()}
        >
          {t("BACK_TO_ARTICLES")}
        </Button>
        <ArticleDetails id={id} />
        <Text
          title={t("RECOMMENDATIONS")}
          size={TextSize.L}
          className="recommendations"
        />
        <ArticleList
          articles={recomendations}
          isLoading={recommendationsIsLoading}
          className="article-list-recommendations"
        />
        <Text title={t("COMMENTS")} size={TextSize.L} className="comments" />
        <AddCommentFormAsync onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
