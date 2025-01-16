import { Meta, StoryObj } from "@storybook/react";
import Main from "./Main"; // Adjust the import if necessary
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// Meta configuration for Storybook
const meta: Meta<typeof Main> = {
  title: "pages/Main", // Title for the Storybook sidebar
  component: Main,
  parameters: {
    layout: "centered", // Center the component in the preview
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Main Page story with translations
export const DefaultMainPage: Story = {
  args: {},
};

// Main Page in Light theme
export const MainLight: Story = {
  args: {},
};
MainLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Main Page in Dark theme
export const MainDark: Story = {
  args: {},
};
MainDark.decorators = [ThemeDecorator(Theme.DARK)];
