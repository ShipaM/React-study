import { Meta, StoryObj } from "@storybook/react";
import { ArticleList } from "./ArticleList";
import { Article, ArticleView } from "../../model/type/article";
import {
  articleDetailsData,
  articles,
} from "shared/lib/tests/mocks/articleMock";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleList> = {
  title: "entities/Article/ArticleList",
  component: ArticleList,
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
  },
  tags: ["autodocs"],
  argTypes: {
    view: {
      control: "radio",
      options: [ArticleView.SMALL, ArticleView.BIG],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Small: Story = {
  args: {
    articles: articles,
    view: ArticleView.SMALL,
    isLoading: false,
  },
};
Small.decorators = [
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

export const SmallDark: Story = {
  args: {
    articles: articles,
    view: ArticleView.SMALL,
    isLoading: false,
  },
};
SmallDark.decorators = [
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

export const SmallOrange: Story = {
  args: {
    articles: articles,
    view: ArticleView.SMALL,
    isLoading: false,
  },
};
SmallOrange.decorators = [
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

export const Big: Story = {
  args: {
    articles: articles,
    view: ArticleView.BIG,
    isLoading: false,
  },
};
Big.decorators = [
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
export const BigDark: Story = {
  args: {
    articles: articles,
    view: ArticleView.BIG,
    isLoading: false,
  },
};
BigDark.decorators = [
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

export const BigOrange: Story = {
  args: {
    articles: articles,
    view: ArticleView.BIG,
    isLoading: false,
  },
};
BigOrange.decorators = [
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

export const LoadingSmall: Story = {
  args: {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
  },
};
LoadingSmall.decorators = [
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

export const LoadingSmallDark: Story = {
  args: {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
  },
};
LoadingSmallDark.decorators = [
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

export const LoadingSmallOrange: Story = {
  args: {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
  },
};
LoadingSmallOrange.decorators = [
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

export const LoadingBig: Story = {
  args: {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
  },
};
LoadingBig.decorators = [
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

export const LoadingBigDark: Story = {
  args: {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
  },
};
LoadingBigDark.decorators = [
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

export const LoadingBigOrange: Story = {
  args: {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
  },
};
LoadingBigOrange.decorators = [
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

export const Empty: Story = {
  args: {
    articles: [],
    isLoading: false,
    view: ArticleView.SMALL,
  },
};
Empty.decorators = [
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
