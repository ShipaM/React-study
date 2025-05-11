import { Meta, StoryObj } from "@storybook/react";
import { ArticleCardSmall } from "./ArticleCardSmall";
import { ArticleView } from "entities/Article/model/type/article";
import { articleListItem } from "shared/lib/tests/mocks/articleMock";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleCardSmall> = {
  title: "entities/Article/ArticleCardSmall",
  component: ArticleCardSmall,
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
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
  },
};

export default meta;

type Story = StoryObj<typeof ArticleCardSmall>;

export const Primary: Story = {
  args: {
    article: articleListItem,
    view: ArticleView.SMALL,
    className: "",
  },
};

export const PrimaryDark: Story = {
  args: {
    article: articleListItem,
    view: ArticleView.SMALL,
    className: "",
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
