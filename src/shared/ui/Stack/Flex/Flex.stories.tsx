import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";
import React from "react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Flex> = {
  title: "shared/Flex",
  component: Flex,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Centers the component in Storybook
  },
  argTypes: {
    direction: {
      control: { type: "radio" },
      options: ["row", "column"],
    },
    justify: {
      control: { type: "radio" },
      options: ["start", "center", "end", "between"],
    },
    align: {
      control: { type: "radio" },
      options: ["start", "center", "end"],
    },
    gap: {
      control: { type: "select" },
      options: ["4", "8", "16", "32"],
    },
    max: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const content = (
  <>
    <div>123456</div>
    <div>123456789</div>
    <div>1234567</div>
  </>
);

export const Row: Story = {
  args: {
    direction: "row",
    justify: "start",
    align: "center",
    gap: "16",
    children: content,
  },
};

export const RowDark: Story = {
  args: {
    direction: "row",
    justify: "start",
    align: "center",
    gap: "16",
    children: content,
  },
};
RowDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Column: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "start",
    gap: "8",
    children: content,
  },
};

export const ColumnDark: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "start",
    gap: "8",
    children: content,
  },
};
ColumnDark.decorators = [ThemeDecorator(Theme.DARK)];

export const MaxWidth: Story = {
  args: {
    direction: "row",
    justify: "between",
    align: "center",
    gap: "32",
    max: true,
    children: content,
  },
};

export const Gap4: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "start",
    gap: "4",
    children: content,
  },
};

export const Gap4Dark: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "start",
    gap: "4",
    children: content,
  },
};
Gap4Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gap8: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "start",
    gap: "8",
    children: content,
  },
};

export const Gap8Dark: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "start",
    gap: "8",
    children: content,
  },
};
Gap8Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gap16: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "start",
    gap: "16",
    children: content,
  },
};

export const Gap16Dark: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "start",
    gap: "16",
    children: content,
  },
};
Gap16Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gap32: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "start",
    gap: "32",
    children: content,
  },
};

export const Gap32Dark: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "start",
    gap: "32",
    children: content,
  },
};
Gap32Dark.decorators = [ThemeDecorator(Theme.DARK)];
