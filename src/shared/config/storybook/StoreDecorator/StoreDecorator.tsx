import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { StoryFn } from "@storybook/react";
import React from "react";
import { loginReducer } from "features/AuthByUserName/model/slice/loginSlice";
import { DeepPartial } from "shared/types/deepPartial";
import { ReducersMapObject } from "@reduxjs/toolkit";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  // eslint-disable-next-line react/display-name
  (Story: StoryFn) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        {/* @ts-expect-error: TypeScript cannot infer JSX component type properly */}
        <Story />
      </StoreProvider>
    );
