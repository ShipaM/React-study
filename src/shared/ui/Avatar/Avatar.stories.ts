import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import AvatarImg from "./storybook.jpg";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { within, expect } from "@storybook/test";

const meta: Meta<typeof Avatar> = {
  title: "shared/Avatar", // Organizing component in Storybook
  component: Avatar,
  tags: ["autodocs"], // Enabling auto documentation
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "number", min: 50, max: 300, step: 10 },
      description: "Avatar size in pixels",
    },
    src: { control: "text", description: "Image source URL" },
    className: { control: "text", description: "Custom class for styling" },
    alt: { control: "text", description: "Alternative text for the avatar" },
  },
  args: {
    src: AvatarImg,
    alt: "User Avatar",
    size: 100,
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// 🟢 Default Avatar
export const Default: Story = {};

// 🔵 Large Avatar
export const Large: Story = {
  args: {
    size: 200,
  },
};

// ⚫ Dark Theme Avatar
export const AvatarDark: Story = {
  args: {
    size: 200,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

// 🟠 Orange Theme Avatar (Fixed Theme)
export const AvatarOrange: Story = {
  args: {
    size: 200,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

// 🔹 Small Avatar
export const Small: Story = {
  args: {
    size: 50,
  },
};

// ⚫ Small Avatar in Dark Theme
export const SmallDark: Story = {
  args: {
    size: 50,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

// 🎨 Avatar with a custom CSS class
export const CustomClass: Story = {
  args: {
    className: "custom-class",
  },
};

// ✅ Play function to test if Avatar is rendered correctly
export const WithPlay: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = await canvas.findByRole("img");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("alt", "User Avatar");
  },
};
