import { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailsSkeleton } from "./ArticleDetailsSkeleton";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleDetailsSkeleton> = {
  title: "entities/Article/ArticleDetailsSkeleton",
  component: ArticleDetailsSkeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
  },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsSkeleton>;

export const Default: Story = {};

export const DefaultDark: Story = {};

DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
