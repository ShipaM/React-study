import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUserName/model/slice/loginSlice";
import { LoginSchema } from "features/AuthByUserName/model/types/LoginSchema";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { profileReducer, ProfileSchema } from "entities/Profile";
import { ArticleDetailsSchema } from "entities/Article";
import { addCommentFormReducer } from "features/AddCommentForm/model/slices/addCommentFormSlice";
import { AddCommentFormSchema } from "features/AddCommentForm";

export interface componentRenderOptions {
  route?: string;
  initialState?: StateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer as Reducer<LoginSchema | undefined>,
  profile: profileReducer as Reducer<ProfileSchema | undefined>,
  articleDetails: articleDetailsReducer as Reducer<
    ArticleDetailsSchema | undefined
  >,
  addCommentForm: addCommentFormReducer as Reducer<
    AddCommentFormSchema | undefined
  >,
};

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {}
) {
  const { route = "/", initialState, asyncReducers } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        initialState={initialState}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}
