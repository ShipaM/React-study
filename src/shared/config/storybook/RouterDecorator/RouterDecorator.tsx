import { Decorator } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";

// RouterDecorator for wrapping stories with Router
export const RouterDecorator: Decorator = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
