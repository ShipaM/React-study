import {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CounterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserName";
// import { NavigateFunction } from "react-router-dom";
import { staticReducers } from "./store";
import { ArticleDetailsSchema } from "entities/Article";
import {
  // ArticleDetailsCommentsSchema,
  ArticleDetailsPageSchema,
  // ArticleDetailsRecommendationsSchema,
} from "pages/ArticleDeteilsPage";
import { AddCommentFormSchema } from "features/AddCommentForm";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { ScrollSaveSchema } from "features/ScrollSave";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollSave: ScrollSaveSchema;

  //async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  // articleDetailsComments?: ArticleDetailsCommentsSchema;
  // ArticleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (
    state: StateSchema,
    action: Action
  ) => {
    counter: CounterSchema;
    user: UserSchema;
    scrollSave: ScrollSaveSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    // ArticleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
  };
  // reduce: (
  //   state: StateSchema,
  //   action: Action
  // ) => ReturnType<typeof combineReducers>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;

  // true - mounted, false - unmounted
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
  // navigate?: NavigateFunction;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: StateSchema;
}

export type StaticReducers = typeof staticReducers;

// All the Reducers of the app
export type Reducers = Record<StateSchemaKey, Reducer>;
