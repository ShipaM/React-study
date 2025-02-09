import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { StoryFn } from "@storybook/react";
import React from "react";
import { loginReducer } from "features/AuthByUserName/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { BrowserRouter } from "react-router-dom";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
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
