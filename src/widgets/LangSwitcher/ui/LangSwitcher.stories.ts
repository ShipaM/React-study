import { Meta, StoryObj } from "@storybook/react";
import { LangSwitcher } from "./LangSwitcher";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// Meta configuration for Storybook
const meta: Meta<typeof LangSwitcher> = {
  title: "widgets/LangSwitcher", // Title for the component in Storybook
  component: LangSwitcher,
  parameters: {
    layout: "centered", // Centers the component in the preview
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    short: {
      control: "boolean", // Allows toggling the short version of the language text
    },
    className: {
      control: "text", // Allows the user to input a custom class name
      defaultValue: "", // Default empty class name
      description: "Custom class for styling",
    },
  },
  args: {
    short: false, // Default to false for the full language name
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default LangSwitcher story
export const DefaultLangSwitcher: Story = {
  args: {
    short: false, // Show full language name
  },
};

// LangSwitcher with the "short" prop
export const ShortLangSwitcher: Story = {
  args: {
    short: true, // Show short language code (e.g., "UA" or "EN")
  },
};

// LangSwitcher with custom className
export const CustomClassLangSwitcher: Story = {
  args: {
    className: "custom-class", // Allows a custom class name to be applied
  },
};

// LangSwitcher with light theme
export const LangSwitcherLight: Story = {
  args: {
    short: false, // Default to full language name
  },
};
LangSwitcherLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// LangSwitcher with dark theme
export const LangSwitcherDark: Story = {
  args: {
    short: false, // Default to full language name
  },
};
LangSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
