import { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"; // Assuming this decorator is for switching themes

// Meta configuration for Storybook
const meta: Meta<typeof ThemeSwitcher> = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    className: {
      control: "text", // Allow to pass a custom class name to the component
    },
  },
  args: {
    className: "", // Default className value
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
// Story for the ThemeSwitcher in the LIGHT theme
export const LightTheme: Story = {
  args: {},
};
LightTheme.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for the ThemeSwitcher in the DARK theme
export const DarkTheme: Story = {
  args: {},
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
