import { Meta, StoryObj } from "@storybook/react";
import { NotFound } from "./NotFound";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// Meta configuration for Storybook
const meta: Meta<typeof NotFound> = {
  title: "pages/NotFound", // Title of the component in the sidebar
  component: NotFound,
  parameters: {
    layout: "centered", // Centers the component in the preview window
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    className: {
      control: "text", // Custom class name for styling
    },
  },
  args: {
    className: "", // Default empty className
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default NotFound component story
export const DefaultNotFound: Story = {
  args: {},
};

// NotFound in light theme
export const NotFoundLight: Story = {
  args: {},
};
NotFoundLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// NotFound in dark theme
export const NotFoundDark: Story = {
  args: {},
};
NotFoundDark.decorators = [ThemeDecorator(Theme.DARK)];
