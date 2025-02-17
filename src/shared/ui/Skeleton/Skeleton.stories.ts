import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { within, expect } from "@storybook/test";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Skeleton> = {
  title: "shared/Skeleton",
  parameters: {
    layout: "centered", // Centers the component in Storybook
  },
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS class for custom styling.",
    },
    height: {
      control: "text",
      description: "Height of the skeleton (e.g., '100px', '50%').",
    },
    width: {
      control: "text",
      description: "Width of the skeleton (e.g., '200px', '80%').",
    },
    border: {
      control: "text",
      description: "Border radius (e.g., '10px', '50%' for circular).",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    height: "100px",
    width: "400px",
  },
};

export const DefaultDark: Story = {
  args: {
    height: "100px",
    width: "400px",
  },
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Rounded: Story = {
  args: {
    height: "100px",
    width: "100px",
    border: "50%",
  },
};

export const RoundedDark: Story = {
  args: {
    height: "100px",
    width: "100px",
    border: "50%",
  },
};
RoundedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Large: Story = {
  args: {
    height: "200px",
    width: "400px",
  },
};

export const LargeDark: Story = {
  args: {
    height: "200px",
    width: "400px",
  },
};
LargeDark.decorators = [ThemeDecorator(Theme.DARK)];

// 🧪 Test story with automated interaction testing
export const Test: Story = {
  args: {
    height: "50px",
    width: "150px",
    className: "test-skeleton",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const skeletonElement = await canvas.getByTestId("skeleton"); // Find the Skeleton element

    expect(skeletonElement).toBeInTheDocument(); // Ensure the element renders
    expect(skeletonElement).toHaveClass("test-skeleton"); // Check if the className is applied
    expect(skeletonElement).toHaveStyle({
      height: "50px",
      width: "150px",
    }); // Validate inline styles
  },
};
