import { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./Profile";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// Meta configuration for Storybook
const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  parameters: {
    layout: "centered", // Center the component in the preview
  },
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
