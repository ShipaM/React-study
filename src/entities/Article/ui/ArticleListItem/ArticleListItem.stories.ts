import { Meta, StoryObj } from "@storybook/react";
import { ArticleListItem } from "./ArticleListItem";
import {
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from "../../model/type/article";
import { Article } from "../../model/type/article";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { articleDetailsData } from "shared/lib/tests/mocks/articleMock";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "entities/Article/ArticleListItem",
  component: ArticleListItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
  },
  argTypes: {
    view: {
      control: { type: "select" },
      options: [ArticleView.SMALL, ArticleView.BIG],
    },
  },
} satisfies Meta<typeof ArticleListItem>;

const article: Article = {
  id: "1",
  title: "Test Article Title",
  subtitle: "Test subtitle for article",
  img: "https://steamuserimages-a.akamaihd.net/ugc/52453354080448818/543783B601D5A853E3F50907B9722A314DFD92B6/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
  views: 456,
  createdAt: "2024-04-16",
  user: {
    password: "123",
    id: "1",
    username: "John Doe",
    avatar:
      "https://steamuserimages-a.akamaihd.net/ugc/52453354080448818/543783B601D5A853E3F50907B9722A314DFD92B6/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
  },
  type: [ArticleType.IT, ArticleType.SCIENCE],
  blocks: [
    {
      id: "b1",
      type: ArticleBlockType.TEXT,
      title: "Introduction",
      paragraphs: [
        "This is a test paragraph for the article block.",
        "It supports multiple paragraphs.",
      ],
    },
  ],
};

type Story = StoryObj<typeof ArticleListItem>;

export const BigView: Story = {
  args: {
    article,
    view: ArticleView.BIG,
  },
};
BigView.decorators = [
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

export const BigViewDark: Story = {
  args: {
    article,
    view: ArticleView.BIG,
  },
};
BigViewDark.decorators = [
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

export const SmallView: Story = {
  args: {
    article,
    view: ArticleView.SMALL,
  },
};
SmallView.decorators = [
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

export const SmallViewDark: Story = {
  args: {
    article,
    view: ArticleView.SMALL,
  },
};
SmallViewDark.decorators = [
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
