import { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// Meta configuration for Storybook
const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered", // Center the component in the preview
  },
  tags: ["autodocs"], // Enable auto documentation
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default LoginForm story
export const DefaultLoginForm: Story = {
  args: {},
};

// LoginForm with error
export const LoginFormWithError: Story = {
  args: {},
};

LoginFormWithError.decorators = [
  StoreDecorator({
    loginForm: {
      username: "123",
      password: "123",
      isLoading: false,
      error: "You have entered an incorrect username or password!!!",
    },
    counter: { value: 0 },
    user: {},
  }),
];

// LoginForm with error in Dark theme
export const LoginFormWithErrorInDarkTheme: Story = {
  args: {},
};

LoginFormWithErrorInDarkTheme.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: "123",
      password: "123",
      isLoading: false,
      error: "You have entered an incorrect username or password!!!",
    },
    counter: { value: 0 },
    user: {},
  }),
];

// LoginForm with loading true
export const LoginFormWithLoading: Story = {
  args: {},
};

LoginFormWithLoading.decorators = [
  StoreDecorator({
    loginForm: {
      username: undefined,
      password: undefined,
      isLoading: true,
    },
    counter: { value: 0 },
    user: {},
  }),
];

// LoginForm with loading true in darktheme
export const LoginFormWithLoadingInDarkTheme: Story = {
  args: {},
};

LoginFormWithLoadingInDarkTheme.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: undefined,
      password: undefined,
      isLoading: true,
    },
    counter: { value: 0 },
    user: {},
  }),
];
