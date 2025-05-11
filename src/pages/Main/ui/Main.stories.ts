import { Meta, StoryObj } from "@storybook/react";
import Main from "./Main";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

// Meta configuration for Storybook
const meta: Meta<typeof Main> = {
  title: "pages/Main",
  component: Main,
  parameters: {
    layout: "centered", // Center the component in the preview
  },
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "",
        password: "",
        isLoading: false,
      },
      counter: { value: 0 },
      user: {},
      profile: {
        isLoading: false,
        readOnly: false,
      },
    }),
  ],
  tags: ["autodocs"], // Enable auto documentation
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
