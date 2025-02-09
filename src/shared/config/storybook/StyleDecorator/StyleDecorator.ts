import "app/styles/index.css";
import { Decorator, StoryFn } from "@storybook/react";

// Decorator for connecting global styles
export const StyleDecorator: Decorator = (story: () => StoryFn) => story();
