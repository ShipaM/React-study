import "app/styles/index.css";
import { StoryFn } from "@storybook/react";

// Decorator for connecting global styles
export const StyleDecorator = (story: () => StoryFn) => story();
