import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { TextTheme } from "./textConstants";
import { Theme } from "app/providers/ThemeProvider";

// Meta configuration for Storybook
const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  parameters: {
    layout: "centered", // Center the component in the preview
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    theme: {
      control: "select",
      options: [TextTheme.ERROR, TextTheme.PRIMARY],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Text story
export const DefaultText: Story = {
  args: {
    title: "Primary Title",
    text: "This is a primary text",
    theme: TextTheme.PRIMARY,
  },
};

// Only Title story
export const OnlyTitle: Story = {
  args: {
    title: "Only Primary Title",
    theme: TextTheme.PRIMARY,
  },
};

// Only Text story
export const OnlyText: Story = {
  args: {
    text: "Only primary text",
    theme: TextTheme.PRIMARY,
  },
};

// Text in Light theme
export const TextLight: Story = {
  args: {
    title: "Primary Title",
    text: "This is a primary text",
    theme: TextTheme.PRIMARY,
  },
};
TextLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Text in Dark theme
export const TextDark: Story = {
  args: {
    title: "Primary Title",
    text: "This is a primary text",
    theme: TextTheme.PRIMARY,
  },
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

// Error Text in Light theme
export const ErrorTextLight: Story = {
  args: {
    title: "Error Title",
    text: "This is an error text",
    theme: TextTheme.ERROR,
  },
};
ErrorTextLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Error Text in Dark theme
export const ErrorTextDark: Story = {
  args: {
    title: "Error Title",
    text: "This is an error text",
    theme: TextTheme.ERROR,
  },
};
ErrorTextDark.decorators = [ThemeDecorator(Theme.DARK)];
