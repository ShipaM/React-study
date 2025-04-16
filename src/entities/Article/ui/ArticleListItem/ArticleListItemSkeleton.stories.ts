import { Meta, StoryObj } from "@storybook/react";
import { ArticleListItemSkeleton } from "./ArticleListItemSkeleton";
import { ArticleView } from "entities/Article/model/type/article";

const meta: Meta<typeof ArticleListItemSkeleton> = {
  title: "entities/Article/ArticleListItemSkeleton",
  component: ArticleListItemSkeleton,
  tags: ["autodocs"],
  args: {
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof ArticleListItemSkeleton>;

export const Big: Story = {
  args: {
    view: ArticleView.BIG,
  },
};

export const Small: Story = {
  args: {
    view: ArticleView.SMALL,
  },
};
