import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import AvatarImg from "./storybook.jpg";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Avatar> = {
  title: "shared/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: { type: "number", min: 50, max: 300, step: 10 } },
    src: { control: "text" },
    className: { control: "text" },
    alt: { control: "text" },
  },
  args: {
    src: AvatarImg,
    alt: "Avatar",
    size: 100,
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 200,
  },
};

export const LargeDark: Story = {
  args: {
    size: 200,
  },
};
LargeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Small: Story = {
  args: {
    size: 50,
  },
};

export const SmallDark: Story = {
  args: {
    size: 50,
  },
};
SmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CustomClass: Story = {
  args: {
    className: "custom-class",
  },
};
