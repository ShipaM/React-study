import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { screen, expect } from "@storybook/test";

const meta: Meta<typeof Card> = {
  title: "shared/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "This is a card",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    className: "",
  },
};

export const PrimaryDark: Story = {
  args: {
    className: "",
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryOrange: Story = {
  args: {
    className: "",
  },
};
PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const PrimaryWithTest: Story = {
  args: {
    className: "",
  },
  play: async () => {
    const card = await screen.findByTestId("card");

    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent("This is a card");
  },
};

export const WithCustomClassTest: Story = {
  args: {
    className: "custom-card",
    children: "Card with custom class",
  },
  play: async () => {
    const card = await screen.findByTestId("card");

    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent("Card with custom class");
  },
};
