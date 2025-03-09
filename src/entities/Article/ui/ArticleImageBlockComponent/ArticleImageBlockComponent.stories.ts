import { Meta, StoryObj } from "@storybook/react";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";
import {
  ArticleBlockType,
  ArticleImageBlock,
} from "entities/Article/model/type/article";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleImageBlockComponent> = {
  title: "entities/ArticleImageBlockComponent",
  component: ArticleImageBlockComponent,
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

// Sample article image block data
const mockBlock: ArticleImageBlock = {
  id: "1",
  type: ArticleBlockType.IMAGE,
  src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
  title: "Example Image",
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

export const WithoutTitle: Story = {
  args: {
    block: { ...mockBlock, title: "" },
  },
};
