import { Meta, StoryObj } from "@storybook/react";
import { ArticleCardBig } from "./ArticleCardBig";
import {
  ArticleTextBlock,
  ArticleBlockType,
  ArticleView,
} from "../../model/type/article";
import { articleListItem } from "shared/lib/tests/mocks/articleMock";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleCardBig> = {
  title: "entities/Article/ArticleCardBig",
  component: ArticleCardBig,
  tags: ["autodocs"],
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
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
  },
};

export default meta;

type Story = StoryObj<typeof ArticleCardBig>;

const mockTextBlock: ArticleTextBlock = {
  type: ArticleBlockType.TEXT,
  paragraphs: ["paragraphs"],
  title: "title",
  id: "id",
};

export const Primary: Story = {
  args: {
    article: articleListItem,
    view: ArticleView.BIG,
    className: "",
    onOpenArticle: () => alert("Open article"),
    textBlock: mockTextBlock,
  },
};

export const PrimaryDark: Story = {
  args: {
    article: articleListItem,
    view: ArticleView.BIG,
    className: "",
    onOpenArticle: () => alert("Open article"),
    textBlock: mockTextBlock,
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
