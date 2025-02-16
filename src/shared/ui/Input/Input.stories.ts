import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof Input> = {
  title: "Shared/Input",
  component: Input,
  parameters: {
    layout: "centered", // Centers the component in Storybook's layout
    actions: {
      handles: ["change", "input"], // Listen for change/input actions
    },
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    onChange: {
      action: "changed",
      description: "Triggered when input value changes",
    },
    className: {
      control: "text",
      description: "Custom class for styling the input component",
    },
    placeholder: {
      control: "text",
      description: "Text to display when the input is empty",
    },
    autofocus: {
      control: "boolean",
      description: "Whether the input should autofocus on page load",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
  },
};

export const DefaultDark: Story = {
  args: {
    placeholder: "Enter text",
  },
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithAutofocus: Story = {
  args: {
    placeholder: "Autofocus Input",
    autofocus: true,
  },
};

export const WithAutofocusDark: Story = {
  args: {
    placeholder: "Autofocus Input",
    autofocus: true,
  },
};
WithAutofocusDark.decorators = [ThemeDecorator(Theme.DARK)];
