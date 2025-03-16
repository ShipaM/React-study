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
import { NavigateFunction } from "react-router-dom";
import { staticReducers } from "./store";
import { ArticleDetailsSchema } from "entities/Article";
import { ArticleDetailsCommentSchema } from "pages/ArticleDeteilsPage";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  //async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (
    state: StateSchema,
    action: Action
  ) => {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
  };
  // reduce: (
  //   state: StateSchema,
  //   action: Action
  // ) => ReturnType<typeof combineReducers>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: StateSchema;
}

export type StaticReducers = typeof staticReducers;

// All the Reducers of the app
export type Reducers = Record<StateSchemaKey, Reducer>;
