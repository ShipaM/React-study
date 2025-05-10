import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { StoryFn } from "@storybook/react";
import React from "react";
import { loginReducer } from "features/AuthByUserName/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { BrowserRouter } from "react-router-dom";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { addCommentFormReducer } from "features/AddCommentForm/model/slices/addCommentFormSlice";
import { articlePageReducer } from "pages/ArticlesPage/model/slices/articlePageSlice";
import { articleDetailsPageReducer } from "pages/ArticleDeteilsPage/model/slices";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlePageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  // eslint-disable-next-line react/display-name
  (Story: StoryFn) =>
    (
      <BrowserRouter>
        <StoreProvider
          initialState={state}
          asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
          {/* @ts-expect-error: TypeScript cannot infer JSX component type properly */}
          <Story />
        </StoreProvider>
      </BrowserRouter>
    );
