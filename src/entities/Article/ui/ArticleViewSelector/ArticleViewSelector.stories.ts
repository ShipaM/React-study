import type { Meta, StoryObj } from "@storybook/react";
import { ArticleViewSelector } from "./ArticleViewSelector";
import { ArticleView } from "entities/Article/model/type/article";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleViewSelector> = {
  title: "entities/Article/ArticleViewSelector",
  component: ArticleViewSelector,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
  },
  args: {
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const PrimaryBig: Story = {
  args: {
    view: ArticleView.BIG,
  },
};

export const PrimarySmall: Story = {
  args: {
    view: ArticleView.SMALL,
  },
};

export const DarkBig: Story = {
  args: {
    view: ArticleView.BIG,
  },
};
DarkBig.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkSmall: Story = {
  args: {
    view: ArticleView.SMALL,
  },
};
DarkSmall.decorators = [ThemeDecorator(Theme.DARK)];
