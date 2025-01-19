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
 args: {
    children: "Modal Window", // Default value for the button text
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
 args: {
  isOpen: true
  },
};
ModalLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ModalDark: Story = {
 args: {
   isOpen: true
  },
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
