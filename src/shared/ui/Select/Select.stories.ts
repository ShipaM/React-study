import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select"; // Assuming the path is correct
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// Default meta configuration
const meta: Meta<typeof Select> = {
  title: "shared/Select", // Adjust the title according to your structure
  component: Select,
  parameters: {
    layout: "centered", // Centers the component in Storybook
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    onChange: { action: "changed" }, // Add action to capture onChange
    className: { control: "text", description: "Custom class for styling" },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

// Default Select story
export const Default: Story = {
  args: {
    label: "Choose an option",
    options: [
      { value: "option1", content: "Option 1" },
      { value: "option2", content: "Option 2" },
      { value: "option3", content: "Option 3" },
    ],
    value: "option1", // Initial selected value
  },
};

export const DefaultDark: Story = {
  args: {
    label: "Choose an option",
    options: [
      { value: "option1", content: "Option 1" },
      { value: "option2", content: "Option 2" },
      { value: "option3", content: "Option 3" },
    ],
    value: "option1", // Initial selected value
  },
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

// Read-only Select story (disabled state)
export const ReadOnly: Story = {
  args: {
    label: "Choose an option",
    options: [
      { value: "option1", content: "Option 1" },
      { value: "option2", content: "Option 2" },
      { value: "option3", content: "Option 3" },
    ],
    value: "option2",
    readOnly: true, // Disabling the select (making it read-only)
  },
};

export const ReadOnlyDark: Story = {
  args: {
    label: "Choose an option",
    options: [
      { value: "option1", content: "Option 1" },
      { value: "option2", content: "Option 2" },
      { value: "option3", content: "Option 3" },
    ],
    value: "option2",
    readOnly: true, // Disabling the select (making it read-only)
  },
};
ReadOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

// Select with no label and no options
export const NoOptions: Story = {
  args: {
    options: [], // Empty options array
    value: "",
  },
};

export const NoOptionsDark: Story = {
  args: {
    options: [], // Empty options array
    value: "",
  },
};
NoOptionsDark.decorators = [ThemeDecorator(Theme.DARK)];
