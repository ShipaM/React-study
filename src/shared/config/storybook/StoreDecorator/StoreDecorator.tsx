import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { StoryFn } from "@storybook/react";
import React from "react";
import { loginReducer } from "features/AuthByUserName/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { BrowserRouter } from "react-router-dom";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { articleDetailsCommentsReducer } from "pages/ArticleDeteilsPage/model/slices/articleDetailsCommentsSlice";
import { addCommentFormReducer } from "features/AddCommentForm/model/slices/addCommentFormSlice";
import { articlePageReducer } from "pages/ArticlesPage/model/slices/articlePageSlice";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
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
