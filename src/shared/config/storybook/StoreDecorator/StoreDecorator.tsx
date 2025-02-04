import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { StoryFn } from "@storybook/react";
import React from "react";

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: StateSchema) => (Story: StoryFn) =>
  (
    <StoreProvider initialState={state}>
      {/* @ts-expect-error: TypeScript cannot infer JSX component type properly */}

      <Story />
    </StoreProvider>
  );
