import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ButtonSize, ButtonTheme } from "./buttonConstants";
import { within, expect } from "@storybook/test";

// Meta information configuration for Storybook
const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered", // Centers the component in Storybook
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    theme: {
      control: "select",
      options: [
        ButtonTheme.CLEAR,
        ButtonTheme.OUTLINE,
        ButtonTheme.OUTLINE_RED,
        ButtonTheme.BACKGROUND,
        ButtonTheme.CLEAR_INVERTED,
        ButtonTheme.BACKGROUND_INVERTED,
      ], // Available options for selecting the theme
      description: "Button theme styles",
    },
    size: {
      control: "select",
      options: [ButtonSize.M, ButtonSize.L, ButtonSize.XL], // Available button sizes
      description: "Button size options",
    },
    disabled: {
      control: "boolean", // Controller to check the disabled state
      description: "Disables the button",
    },
    square: {
      control: "boolean", // Controller to check the square state
    },
    className: { control: "text", description: "Custom class for styling" },
  },
  args: {
    children: "Button", // Default value for the button text
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Story for a button with the "CLEAR" theme
export const ClearLight: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
};
ClearLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for a button with the "CLEAR" theme
export const ClearDark: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

// Story for a button with the "OUTLINE" theme
export const OutlineLight: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for a button with the "OUTLINE" theme
export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

// Story for a button with the "OUTLINE_RED" theme
export const OutlineRedLight: Story = {
  args: {
    theme: ButtonTheme.OUTLINE_RED,
  },
};
OutlineRedLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for a button with the "OUTLINE_RED" theme
export const OutlineRedDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE_RED,
  },
};
OutlineRedDark.decorators = [ThemeDecorator(Theme.DARK)];

// Story for a button with the "BACKGROUND" theme
export const BackgroundLight: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
};
BackgroundLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for a button with the "BACKGROUND" theme
export const BackgroundDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

// Story for a button with the "CLEAR_INVERTED" theme
export const ClearInvertedLight: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};
ClearInvertedLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for a button with the "CLEAR_INVERTED" theme
export const ClearInvertedDark: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

// Story for a button with the "BACKGROUND_INVERTED" theme
export const BackgroundInvertedLight: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};
BackgroundInvertedLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for a button with the "BACKGROUND_INVERTED" theme
export const BackgroundInvertedDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

// Story for a button with the "M" size
export const MediumLight: Story = {
  args: {
    size: ButtonSize.M,
  },
};
MediumLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for a button with the "M" size
export const MediumDark: Story = {
  args: {
    size: ButtonSize.M,
  },
};
MediumDark.decorators = [ThemeDecorator(Theme.DARK)];

// Story for a button with the "L" size
export const LargeLight: Story = {
  args: {
    size: ButtonSize.L,
  },
};
LargeLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for a button with the "L" size
export const LargeDark: Story = {
  args: {
    size: ButtonSize.L,
  },
};
LargeDark.decorators = [ThemeDecorator(Theme.DARK)];

// Story for a button with the "XL" size
export const XLLight: Story = {
  args: {
    size: ButtonSize.XL,
  },
};
XLLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for a button with the "XL" size
export const XLDark: Story = {
  args: {
    size: ButtonSize.XL,
  },
};
XLDark.decorators = [ThemeDecorator(Theme.DARK)];

// Story for a button with the "disabled" flag
export const DisabledLight: Story = {
  args: {
    disabled: true,
  },
};
DisabledLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for a button with the "disabled" flag
export const DisabledDark: Story = {
  args: {
    disabled: true,
  },
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

// Story for a button with the "square" flag
export const SquareLight: Story = {
  args: {
    square: true,
    children: "<",
  },
};
SquareLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for a button with the "square" flag
export const SquareDark: Story = {
  args: {
    square: true,
    children: ">",
  },
};
SquareDark.decorators = [ThemeDecorator(Theme.DARK)];

// Story for a button with a theme, size, and the "square" flag
export const ClearLargeSquareLight: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.L,
    square: true,
  },
};
ClearLargeSquareLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for a button with a theme, size, and the "square" flag
export const ClearLargeSquareDark: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.L,
    square: true,
  },
};
ClearLargeSquareDark.decorators = [ThemeDecorator(Theme.DARK)];

// ✅ Play function for button interaction test
export const WithPlay: Story = {
  args: { theme: ButtonTheme.OUTLINE, children: "Click Me" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  },
};
