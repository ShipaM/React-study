import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof Input> = {
  title: "Shared/Input",
  component: Input,
  parameters: {
    layout: "centered", // Centers the component in Storybook's layout
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    onChange: { action: "changed" },
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
