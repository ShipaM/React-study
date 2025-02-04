import { Meta, StoryObj } from "@storybook/react";
import { PageLoader } from "./PageLoader"; // Adjust the path based on your structure
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider"; // Assuming you have theme provider

const meta: Meta<typeof PageLoader> = {
  title: "widgets/PageLoader", // Set the category in Storybook sidebar
  component: PageLoader,
  parameters: {
    layout: "centered", // Centers the component in the Storybook layout
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    className: { control: "text" }, // Allows changing className from Storybook
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default PageLoader story
export const Default: Story = {
  args: {},
};

// PageLoader in Light Theme
export const LightTheme: Story = {
  args: {},
};
LightTheme.decorators = [ThemeDecorator(Theme.LIGHT)];

// PageLoader in Dark Theme
export const DarkTheme: Story = {
  args: {},
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
