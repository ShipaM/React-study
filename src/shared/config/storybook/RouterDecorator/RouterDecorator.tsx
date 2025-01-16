/* eslint-disable react/react-in-jsx-scope */
import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";

// RouterDecorator for wrapping stories with Router
export const RouterDecorator = (StoryComponent: StoryFn) => (
  <BrowserRouter>
    {/* @ts-expect-error: TypeScript cannot infer JSX component type properly */}
    <StoryComponent />
  </BrowserRouter>
);
