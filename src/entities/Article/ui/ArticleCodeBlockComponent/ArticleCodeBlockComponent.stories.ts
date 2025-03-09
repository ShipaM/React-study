import { Meta, StoryObj } from "@storybook/react";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";
import {
  ArticleBlockType,
  ArticleCodeBlock,
} from "entities/Article/model/type/article";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleCodeBlockComponent> = {
  title: "entities/ArticleCodeBlockComponent",
  component: ArticleCodeBlockComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
  },
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

// Sample code block data
const mockBlock: ArticleCodeBlock = {
  id: "1",
  type: ArticleBlockType.CODE,
  code: `function sayHello() {
  console.log("Hello, World!");
}`,
};

export const Default: Story = {
  args: {
    block: mockBlock,
  },
};

export const DefaultDark: Story = {
  args: {
    block: mockBlock,
  },
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DefaultOrange: Story = {
  args: {
    block: mockBlock,
  },
};
DefaultOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
