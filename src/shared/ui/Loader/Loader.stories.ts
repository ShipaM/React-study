import { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// Meta configuration for Storybook
const meta: Meta<typeof Loader> = {
  title: "shared/Loader", // Title in the sidebar of Storybook
  component: Loader,
  parameters: {
    layout: "centered", // Centers the component in Storybook's layout
  },
  argTypes: {
    className: {
      control: "text", // Allows the user to input a custom class name for the loader
      defaultValue: "", // Default empty class name
    },
  },
  args: {
    className: "", // Default value for className
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Loader story
export const DefaultLoader: Story = {
  args: {
    className: "", // No additional class for the default story
  },
};

// light Loader story
export const DarkLoader: Story = {
  args: {
    className: "", // No additional class for the default story
  },
};
DarkLoader.decorators = [ThemeDecorator(Theme.LIGHT)];

// light Loader story
export const LightLoader: Story = {
  args: {
    className: "", // No additional class for the default story
  },
};
LightLoader.decorators = [ThemeDecorator(Theme.DARK)];
