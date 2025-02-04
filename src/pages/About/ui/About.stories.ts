import { Meta, StoryObj } from "@storybook/react";
import About from "./About";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// Meta configuration for Storybook
const meta: Meta<typeof About> = {
  title: "pages/About",
  component: About,
  parameters: {
    layout: "centered", // Centers the component in the preview
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default About Page story with translations
export const DefaultAboutPage: Story = {
  args: {},
};

// About Page in Light theme
export const AboutLight: Story = {
  args: {},
};
AboutLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// About Page in Dark theme
export const AboutDark: Story = {
  args: {},
};
AboutDark.decorators = [ThemeDecorator(Theme.DARK)];
