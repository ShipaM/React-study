import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered", // Centers the component in Storybook
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls whether the modal is open or closed.",
    },
    children: {
      control: "text",
      description: "The content inside the modal. Can be any valid React node.",
    },
    onClose: {
      action: "closed", // Mock action in Storybook
      description:
        "Triggered when the modal is closed. Typically used to handle modal state changes.",
    },
  },
  args: {
    children: "Modal Window", // Default value for the modal content
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with modal closed (so users can open it manually)
export const Default: Story = {
  args: {
    isOpen: false,
  },
};

// Open modal in light theme
export const ModalLight: Story = {
  args: {
    isOpen: true,
  },
};

// Open modal in dark theme
export const ModalDark: Story = {
  args: {
    isOpen: true,
  },
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];

// Modal with long content for testing scrolling
export const WithLongContent: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
  },
};
