import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Navbar> = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered", // Center the component in the preview
  },
  tags: ["autodocs"], // Enable auto documentation
};

export default meta;

type Story = StoryObj<typeof meta>;

// Story для Navbar с темой LIGHT
export const NavbarLight: Story = {
  args: {
    className: "navbar-light",
  },
};
NavbarLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story для Navbar с темой DARK
export const NavbarDark: Story = {
  args: {
    className: "navbar-dark",
  },
};
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];
