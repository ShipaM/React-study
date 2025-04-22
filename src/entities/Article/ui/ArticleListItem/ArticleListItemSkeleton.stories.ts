import { Meta, StoryObj } from "@storybook/react";
import { ArticleListItemSkeleton } from "./ArticleListItemSkeleton";
import { ArticleView } from "entities/Article/model/type/article";

const meta: Meta<typeof ArticleListItemSkeleton> = {
  title: "entities/Article/ArticleListItemSkeleton",
  component: ArticleListItemSkeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
  },
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
