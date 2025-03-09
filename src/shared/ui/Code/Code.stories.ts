import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";
import { userEvent, waitFor, within } from "@storybook/test";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Code> = {
  title: "shared/Code",
  component: Code,
  parameters: {
    layout: "centered", // Centers the component in Storybook
  },
  args: {
    text: `const greeting = "Hello, World!";`,
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {};

export const DefaultDark: Story = {};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DefaultOrange: Story = {};
DefaultOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LongCode: Story = {
  args: {
    text: `
      function sum(a, b) {
        return a + b;
      }

      console.log(sum(5, 3));
    `,
  },
};

export const LongCodeDark: Story = {
  args: {
    text: `
      function sum(a, b) {
        return a + b;
      }

      console.log(sum(5, 3));
    `,
  },
};
LongCodeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LongCodeOrange: Story = {
  args: {
    text: `
      function sum(a, b) {
        return a + b;
      }

      console.log(sum(5, 3));
    `,
  },
};
LongCodeOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const CopyAction: Story = {
  args: {
    text: `console.log("Copy me!");`,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const copyButton = canvas.getByRole("button");

    // Ручной мок clipboard API
    const originalClipboard = navigator.clipboard.writeText;
    navigator.clipboard.writeText = async (text) => {
      console.log("Mock clipboard:", text);
      return Promise.resolve();
    };

    await userEvent.click(copyButton);
    await waitFor(() =>
      console.log("The button has been clicked, the text should be copied.")
    );

    navigator.clipboard.writeText = originalClipboard;
  },
};
