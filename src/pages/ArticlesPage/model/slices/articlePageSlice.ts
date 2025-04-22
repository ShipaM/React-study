import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import {
  ArticleView,
  ArticleViewValue,
} from "entities/Article/model/type/article";
import { fetchArticlesList } from "../../model/services/fetchArticlesList";
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const articlesAdapter = createEntityAdapter<Article, string>({
  selectId: (article: Article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlePageSlice = createSlice({
  name: "articlePageSlice",

  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
  }),

  reducers: {
    setView: (state, action: PayloadAction<ArticleViewValue>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initialState: (state) => {
      state.view = localStorage.getItem(
        ARTICLE_VIEW_LOCALSTORAGE_KEY
      ) as ArticleViewValue;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlePageReducer, actions: articlePageActions } =
  articlePageSlice;
