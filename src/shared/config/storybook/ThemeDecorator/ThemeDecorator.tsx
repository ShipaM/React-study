import { Decorator } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import React from "react";

export const ThemeDecorator = (theme: Theme): Decorator => {
  const ThemedStory: Decorator = (Story) => (
    <ThemeProvider initialTheme={theme}>
      <div
        className={`app ${theme}`}
        style={{
          width: "100vw",
          maxWidth: "1000px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    </ThemeProvider>
  );

  return ThemedStory;
};
