import { Meta, StoryObj } from "@storybook/react";
import { NotFound } from "./NotFound";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { within, expect } from "@storybook/test";

// Meta configuration for Storybook
const meta: Meta<typeof NotFound> = {
  title: "pages/NotFound", // Title of the component
  component: NotFound,
  parameters: {
    layout: "centered", // Centers the component in the preview window
    docs: {
      description: {
        component:
          "404 Page - This page is displayed when the user navigates to a non-existent route.",
      },
    },
  },

  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    className: {
      control: "text", // Custom class name for styling
    },
  },
  args: {
    className: "", // Default empty className
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default NotFound component story (renders the default 404 page)
export const DefaultNotFound: Story = {
  args: {},
};

// NotFound with a custom class applied
export const NotFoundWithCustomClass: Story = {
  args: {
    className: "custom-class",
  },
};

// NotFound with a play function to test if the component renders correctly
export const NotFoundWithPlay: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const notFoundText = await canvas.findByTestId("not-found");
    expect(notFoundText).toBeInTheDocument();
  },
};

// NotFound page displayed in dark theme mode
export const NotFoundDark: Story = {
  args: {},
};
NotFoundDark.decorators = [ThemeDecorator(Theme.DARK)];

// NotFound page displayed in orange theme mode
export const NotFoundOrange: Story = {
  args: {},
};
NotFoundOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
