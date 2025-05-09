import type { Meta, StoryObj } from "@storybook/react";
import { ArticleSortSelector } from "./ArticleSortSelector";
import { ArticleSortField } from "entities/Article";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof ArticleSortSelector> = {
  title: "features/ArticleSortSelector",
  component: ArticleSortSelector,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChangeSort: { action: "sort changed" },
    onChangeOrder: { action: "order changed" },
    className: { control: "text", description: "Custom class name" },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleSortSelector>;

export const Default: Story = {
  args: {
    sort: ArticleSortField.CREATED,
    order: "asc",
  },
};

export const DefaultDark: Story = {
  args: {
    sort: ArticleSortField.CREATED,
    order: "asc",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SortByViews: Story = {
  args: {
    sort: ArticleSortField.VIEWS,
    order: "desc",
  },
};

export const SortByTitleDark: Story = {
  args: {
    sort: ArticleSortField.TITLE,
    order: "asc",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ReadOnly: Story = {
  args: {
    sort: ArticleSortField.TITLE,
    order: "asc",
    onChangeSort: () => {},
    onChangeOrder: () => {},
  },
};

export const ReadOnlyDark: Story = {
  args: {
    sort: ArticleSortField.TITLE,
    order: "desc",
    onChangeSort: () => {},
    onChangeOrder: () => {},
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ReadOnlyOrange: Story = {
  args: {
    sort: ArticleSortField.TITLE,
    order: "desc",
    onChangeSort: () => {},
    onChangeOrder: () => {},
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
