import { Theme } from "app/providers/ThemeProvider";
import { AppLink } from "./AppLink";
import { Meta, StoryObj } from "@storybook/react/*";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { AppLinkTheme } from "./appLinkConstants";

// Meta configuration for Storybook
const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
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
  argTypes: {
    theme: {
      control: "select",
      options: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY, AppLinkTheme.RED], // Themes for the AppLink component
    },
    children: {
      control: "text", // Customizable link text
      defaultValue: "Link", // Default link text
    },
    to: {
      control: "text", // Customizable 'to' prop for the Link
      defaultValue: "/", // Default link URL
    },
    className: { control: "text", description: "Custom class for styling" },
  },
  args: {
    theme: AppLinkTheme.PRIMARY, // Default theme
    children: "Link", // Default link text
    to: "/", // Default link URL
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Story for the PRIMARY theme
export const PrimaryLink: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: "Primary Link",
  },
};

// Story for the PRIMARY theme
export const PrimaryLinkWithDarkTheme: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: "Primary Link Dark Theme",
  },
};
PrimaryLinkWithDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

// Story for the SECONDARY theme
export const SecondaryLink: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: "Secondary Link",
  },
};

// Story for the SECONDARY theme
export const SecondaryLinkWithDarkTheme: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: "Secondary Link",
  },
};
SecondaryLinkWithDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

// Story for the RED theme
export const RedLink: Story = {
  args: {
    theme: AppLinkTheme.RED,
    children: "Red Link",
  },
};
// Story for the RED theme
export const RedLinkWithDarkTheme: Story = {
  args: {
    theme: AppLinkTheme.RED,
    children: "Red Link",
  },
};
RedLinkWithDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
