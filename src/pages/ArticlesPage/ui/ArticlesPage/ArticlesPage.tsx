import React, { useCallback } from "react";
import "./ArticlesPage.css";
import { classNames } from "shared/lib/classNames/classNames";
import {
  ArticleList,
  ArticleViewSelector,
  ArticleViewValue,
} from "entities/Article";
import {
  articlePageActions,
  articlePageReducer,
  getArticles,
} from "../../model/slices/articlePageSlice";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchArticlesList } from "../../model/services/fetchArticlesList";
import { useSelector } from "react-redux";
import {
  // getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";

type ArticlesPageProps = {
  className?: string;
};

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage: React.FC<ArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);

  const isLoading = useSelector(getArticlesPageIsLoading);
  // const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlePageActions.initialState());
  });

  const onChangeView = useCallback(
    (view: ArticleViewValue) => {
      dispatch(articlePageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames("article-page", {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList view={view} articles={articles} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
