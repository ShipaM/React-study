/* eslint-disable react/display-name */
import { StoryFn } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import React from "react";

// ThemeDecorator to wrap stories with a specific theme
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div
        className={`app ${theme}`}
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* @ts-expect-error: TypeScript cannot infer JSX component type properly */}
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
