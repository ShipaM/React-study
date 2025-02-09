import { Meta, StoryObj } from "@storybook/react";
import { CurrencySelect } from "./CurrencySelect";
import { Currency } from "../model/types/currency";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof CurrencySelect> = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  args: {
    value: Currency.USD,
  },
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const DefaultCountry: Story = {
  args: {},
};

export const DefaultCountryDark: Story = {
  args: {},
};
DefaultCountryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithValueCountry: Story = {
  args: {
    value: Currency.EUR,
  },
};

export const ReadOnlyCountry: Story = {
  args: {
    value: Currency.UAH,
    readOnly: true,
    onChange: undefined, // No onChange to simulate read-only behavior
  },
};
