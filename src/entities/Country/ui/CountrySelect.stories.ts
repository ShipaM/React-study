import { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "./CountrySelect";
import { Country } from "../model/types/country";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof CountrySelect> = {
  title: "entities/CountrySelect",
  component: CountrySelect,
  parameters: {
    layout: "centered", // Center the component in the preview
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    value: { control: "select", options: Object.values(Country) },
    onChange: { action: "Changed country" },
    readOnly: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Default: Story = {
  args: {},
};

export const DefaultDark: Story = {
  args: {},
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithValue: Story = {
  args: {
    value: Country.Armenia,
  },
};

export const ReadOnly: Story = {
  args: {
    value: Country.Kazakhstan,
    readOnly: true,
  },
};
