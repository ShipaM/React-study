import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AlignItems, TextSize, TextTheme } from "./textConstants";
import { Theme } from "app/providers/ThemeProvider";

// Meta configuration for Storybook
const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  parameters: {
    layout: "centered", // Center the component in the preview
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    theme: {
      control: "select",
      options: [TextTheme.ERROR, TextTheme.PRIMARY],
    },
    alignItems: {
      control: "select",
      options: [AlignItems.CENTER, AlignItems.LEFT, AlignItems.RIGHT],
    },
    size: {
      control: "select",
      options: [TextSize.M, TextSize.L],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Text story
export const DefaultText: Story = {
  args: {
    title: "Primary Title",
    text: "This is a primary text",
    theme: TextTheme.PRIMARY,
    alignItems: AlignItems.LEFT,
    size: TextSize.M,
  },
};

// Default Text story Dark
export const DefaultTextDark: Story = {
  args: {
    title: "Primary Title",
    text: "This is a primary text",
    theme: TextTheme.PRIMARY,
    alignItems: AlignItems.LEFT,
    size: TextSize.L,
  },
};
DefaultTextDark.decorators = [ThemeDecorator(Theme.DARK)];

// Text align Center
export const TextAlignCenter: Story = {
  args: {
    title: "Text align Center",
    text: "Text align Center",
    theme: TextTheme.PRIMARY,
    alignItems: AlignItems.CENTER,
  },
};

// Text align Center Dark
export const TextAlignCenterDark: Story = {
  args: {
    title: "Text align Center",
    text: "Text align Center",
    theme: TextTheme.PRIMARY,
    alignItems: AlignItems.CENTER,
  },
};

// Text size L
export const TextSizeL: Story = {
  args: {
    title: "Text align Center",
    text: "Text align Center",
    theme: TextTheme.PRIMARY,
    alignItems: AlignItems.CENTER,
    size: TextSize.L,
  },
};

// Text size L Dark
export const TextSizeLDark: Story = {
  args: {
    title: "Text align Center",
    text: "Text align Center",
    theme: TextTheme.PRIMARY,
    alignItems: AlignItems.CENTER,
    size: TextSize.L,
  },
};
TextAlignCenterDark.decorators = [ThemeDecorator(Theme.DARK)];
// Text size L
export const TextSizeM: Story = {
  args: {
    title: "Text align Center",
    text: "Text align Center",
    theme: TextTheme.PRIMARY,
    alignItems: AlignItems.CENTER,
    size: TextSize.M,
  },
};

// Text size L Dark
export const TextSizeMDark: Story = {
  args: {
    title: "Text align Center",
    text: "Text align Center",
    theme: TextTheme.PRIMARY,
    alignItems: AlignItems.CENTER,
    size: TextSize.M,
  },
};
TextAlignCenterDark.decorators = [ThemeDecorator(Theme.DARK)];
// Text align Right
export const TextAlignRight: Story = {
  args: {
    title: "Text align Center",
    text: "Text align Center",
    theme: TextTheme.PRIMARY,
    alignItems: AlignItems.RIGHT,
  },
};

// Text align RightDark
export const TextAlignRightDark: Story = {
  args: {
    title: "Text align Center",
    text: "Text align Center",
    theme: TextTheme.PRIMARY,
    alignItems: AlignItems.RIGHT,
  },
};
TextAlignRightDark.decorators = [ThemeDecorator(Theme.DARK)];

// Only Title story
export const OnlyTitle: Story = {
  args: {
    title: "Only Primary Title",
    theme: TextTheme.PRIMARY,
  },
};

// Only Text story
export const OnlyText: Story = {
  args: {
    text: "Only primary text",
    theme: TextTheme.PRIMARY,
  },
};

// Text in Light theme
export const TextLight: Story = {
  args: {
    title: "Primary Title",
    text: "This is a primary text",
    theme: TextTheme.PRIMARY,
  },
};
TextLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Text in Dark theme
export const TextDark: Story = {
  args: {
    title: "Primary Title",
    text: "This is a primary text",
    theme: TextTheme.PRIMARY,
  },
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

// Error Text in Light theme
export const ErrorTextLight: Story = {
  args: {
    title: "Error Title",
    text: "This is an error text",
    theme: TextTheme.ERROR,
  },
};
ErrorTextLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Error Text in Dark theme
export const ErrorTextDark: Story = {
  args: {
    title: "Error Title",
    text: "This is an error text",
    theme: TextTheme.ERROR,
  },
};
ErrorTextDark.decorators = [ThemeDecorator(Theme.DARK)];
