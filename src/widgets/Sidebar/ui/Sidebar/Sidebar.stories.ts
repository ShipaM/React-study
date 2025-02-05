import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// Meta information configuration for Storybook
const meta: Meta<typeof Sidebar> = {
  title: "widgets/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "center", // Centers the component in Storybook
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    className: {
      control: "text",
      description: "additional class",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Story for Sidebar with LIGHT theme
export const SidebarLight: Story = {
  args: {},
};
SidebarLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for Sidebar with LIGHT theme
export const SidebarLightCollapsed: Story = {
  args: {
    className: "collapsed",
  },
};
SidebarLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// Story for Sidebar with DARK theme
export const SidebarDark: Story = {
  args: {},
};
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)];

// Story for Sidebar with DARK theme
export const SidebarDarkCollapsed: Story = {
  args: {
    className: "collapsed",
  },
};
SidebarDarkCollapsed.decorators = [ThemeDecorator(Theme.DARK)];
