import { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

// Meta configuration for Storybook
const meta: Meta<typeof Profile> = {
  title: "pages/Profile",
  component: Profile,
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

// Default Profile Page story with translations
export const DefaultMainPage: Story = {
  args: {},
};

// Profile Page in Light theme
export const ProfileLight: Story = {
  args: {},
};
ProfileLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Profile Page in Dark theme
export const ProfileDark: Story = {
  args: {},
};
ProfileDark.decorators = [ThemeDecorator(Theme.DARK)];
