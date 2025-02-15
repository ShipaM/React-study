import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { Country } from "shared/const/common";
import { Currency } from "entities/Currency/model/types/currency";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  parameters: {
    layout: "centered", // Center the component in the preview
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    error: { control: "text" },
    isLoading: { control: "boolean" },
    onChangeFirstname: { action: "Changed first name" },
    onChangeLastname: { action: "Changed last name" },
    onChangeAge: { action: "Changed age" },
    onChangeUsername: { action: "Changed username" },
    onChangeCity: { action: "Changed city" },
    onChangeAvatar: { action: "Changed avatar" },
    onChangeCurrency: { action: "Changed currency" },
    onChangeCountry: { action: "Changed country" },
    readOnly: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    className: "",
    data: {
      firstname: "John",
      lastname: "Doe",
      age: 39,
      city: "New York",
      username: "johndoe123",
      avatar:
        "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
      currency: Currency.UAH,
      country: Country.Ukraine,
    },
    error: "",
    isLoading: false,
    readOnly: false,
  },
};

export const DefaultDarkTheme: Story = {
  args: {
    className: "",
    data: {
      firstname: "John",
      lastname: "Doe",
      age: 39,
      city: "New York",
      username: "johndoe123",
      avatar:
        "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
      currency: Currency.UAH,
      country: Country.Ukraine,
    },
    error: "",
    isLoading: false,
    readOnly: false,
  },
};
DefaultDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const LoadingDarkTheme: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};
LoadingDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const Error: Story = {
  args: {
    ...Default.args,
    error: "Failed to load profile data.",
  },
};

export const ErrorDarkTheme: Story = {
  args: {
    ...Default.args,
    error: "Failed to load profile data.",
  },
};
ErrorDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
  },
};

export const ReadOnlyDarkTheme: Story = {
  args: {
    ...Default.args,
    readOnly: true,
  },
};
ReadOnlyDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
