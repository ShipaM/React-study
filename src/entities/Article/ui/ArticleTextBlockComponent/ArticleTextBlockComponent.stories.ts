import { Meta, StoryObj } from "@storybook/react";
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent";
import { ArticleTextBlock } from "../../model/type/article";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleTextBlockComponent> = {
  title: "entities/ArticleTextBlockComponent",
  component: ArticleTextBlockComponent,
  parameters: {
    layout: "centered", // Center the component in the Storybook layout
  },
  tags: ["autodocs"],
  args: {
    block: {
      id: "1",
      type: "TEXT",
      title: "Sample Title",
      paragraphs: [
        "This is the first paragraph of the article.",
        "This is the first paragraph of the article.",
      ],
    } as ArticleTextBlock,
  },
};

export default meta;

type Story = StoryObj<typeof ArticleTextBlockComponent>;

// 🟢 Default
export const Default: Story = {};

export const DefaultDark: Story = {};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DefaultOrange: Story = {};
DefaultOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

// 🟡 Without title
export const WithoutTitle: Story = {
  args: {
    block: {
      id: "2",
      type: "TEXT",
      paragraphs: ["Абзац без заголовка 1.", "Абзац без заголовка 2."],
    } as ArticleTextBlock,
  },
};

export const WithoutTitleDark: Story = {
  args: {
    block: {
      id: "2",
      type: "TEXT",
      paragraphs: ["Абзац без заголовка 1.", "Абзац без заголовка 2."],
    } as ArticleTextBlock,
  },
};
WithoutTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithoutTitleOrange: Story = {
  args: {
    block: {
      id: "2",
      type: "TEXT",
      paragraphs: ["Абзац без заголовка 1.", "Абзац без заголовка 2."],
    } as ArticleTextBlock,
  },
};
WithoutTitleOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

// 🔴 Без параграфов
export const WithoutParagraphs: Story = {
  args: {
    block: {
      id: "3",
      type: "TEXT",
      title: "Заголовок, но без текста",
      paragraphs: [],
    } as ArticleTextBlock,
  },
};

// 🔵 С кастомным `className`
export const WithCustomClass: Story = {
  args: {
    className: "custom-class",
  },
};
