import type { Meta, StoryObj } from "@storybook/react";
import AddCommentForm from "./AddCommentForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof AddCommentForm> = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  parameters: {
    layout: "centered", // Center the component in the preview
  },
  tags: ["autodocs"], // Enable auto documentation
  args: {
    onSendComment: (text: string) => console.log("Comment sent:", text), // Default prop for handling comment submission
  },
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Default: Story = {
  args: {
    className: "custom-class", // Example className argument, can be customized
  },
};
Default.decorators = [StoreDecorator({})];

export const DefaultDark: Story = {
  args: {
    className: "custom-class", // Example className argument, can be customized
  },
};
DefaultDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const DefaultOrange: Story = {
  args: {
    className: "custom-class", // Example className argument, can be customized
  },
};
DefaultOrange.decorators = [StoreDecorator({}), ThemeDecorator(Theme.ORANGE)];
