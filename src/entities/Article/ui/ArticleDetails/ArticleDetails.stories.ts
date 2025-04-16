import { Meta, StoryObj } from "@storybook/react";
import { ArticleDetails } from "./ArticleDetails";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Article } from "../../model/type/article";
import { articleDetailsData } from "shared/lib/tests/mocks/articleMock";

const meta: Meta<typeof ArticleDetails> = {
  title: "entities/Article/ArticleDetails",
  component: ArticleDetails,
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

// ArticleDetails when is data
export const Default: Story = {
  args: {},
};
Default.decorators = [
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    articleDetails: {
      error: undefined,
      isLoading: false,
      data: articleDetailsData as Article,
    },
  }),
];

export const DefaultDark: Story = {
  args: {},
};
DefaultDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    articleDetails: {
      error: undefined,
      isLoading: false,
      data: articleDetailsData as Article,
    },
  }),
];

export const DefaultOrange: Story = {
  args: {},
};
DefaultOrange.decorators = [
  ThemeDecorator(Theme.ORANGE),
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    articleDetails: {
      error: undefined,
      isLoading: false,
      data: articleDetailsData as Article,
    },
  }),
];

// ArticleDetails when is isLoading
export const DefaultIsLoading: Story = {
  args: {},
};
DefaultIsLoading.decorators = [
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    articleDetails: {
      error: undefined,
      isLoading: true,
      data: undefined,
    },
  }),
];

export const DefaultDarkIsLoading: Story = {
  args: {},
};
DefaultDarkIsLoading.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    articleDetails: {
      error: undefined,
      isLoading: true,
      data: undefined,
    },
  }),
];

export const DefaultOrangeIsLoading: Story = {
  args: {},
};
DefaultOrangeIsLoading.decorators = [
  ThemeDecorator(Theme.ORANGE),
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    articleDetails: {
      error: "Error fetching article",
      isLoading: true,
      data: undefined,
    },
  }),
];

// ArticleDetails when is error
export const DefaultError: Story = {
  args: {},
};
DefaultError.decorators = [
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    articleDetails: {
      error: "Error fetching article",
      isLoading: false,
      data: undefined,
    },
  }),
];

export const DefaultDarkEror: Story = {
  args: {},
};
DefaultDarkEror.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    articleDetails: {
      error: "Error fetching article",
      isLoading: false,
      data: undefined,
    },
  }),
];

export const DefaultOrangeError: Story = {
  args: {},
};
DefaultOrangeError.decorators = [
  ThemeDecorator(Theme.ORANGE),
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    articleDetails: {
      error: "Error fetching article",
      isLoading: false,
      data: undefined,
    },
  }),
];
