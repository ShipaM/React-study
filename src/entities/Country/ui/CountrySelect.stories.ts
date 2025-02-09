import { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "./CountrySelect";
import { Country } from "../model/types/country";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof CountrySelect> = {
  title: "entities/CurrencySelect",
  component: CountrySelect,
  args: {
    value: Country.Ukraine,
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
    onChange: undefined, // No onChange to simulate read-only behavior
  },
};
