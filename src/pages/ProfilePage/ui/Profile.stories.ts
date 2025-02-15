import { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

// Meta configuration for Storybook
const meta: Meta<typeof Profile> = {
  title: "pages/Profile",
  component: Profile,
  parameters: {
    layout: "centered", // Center the component in the preview
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Profile Page story
export const DefaulProfilePage: Story = {
  args: {},
};
DefaulProfilePage.decorators = [
  StoreDecorator({
    profile: {
      isLoading: false,
      readOnly: false,
      data: {
        firstname: "John",
        lastname: "Doe",
        age: 30,
        city: "New York",
        username: "johndoe123",
        avatar:
          "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
        currency: Currency.UAH,
        country: Country.Ukraine,
      },
    },
  }),
];

// Default Profile Page story in Dark them
export const DefaultProfilePageDark: Story = {
  args: {},
};
DefaultProfilePageDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      isLoading: false,
      readOnly: false,
      data: {
        firstname: "John",
        lastname: "Doe",
        age: 30,
        city: "New York",
        username: "johndoe123",
        avatar: "https://example.com/avatar.jpg",
        currency: Currency.UAH,
        country: Country.Ukraine,
      },
    },
  }),
];
// Profile Page in Light theme
export const ProfileReadOnly: Story = {
  args: {},
};
ProfileReadOnly.decorators = [
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    profile: {
      isLoading: false,
      readOnly: true,
      data: {
        firstname: "John",
        lastname: "Doe",
        age: 30,
        city: "New York",
        username: "johndoe123",
        avatar: "https://example.com/avatar.jpg",
        currency: Currency.UAH,
        country: Country.Ukraine,
      },
    },
  }),
];

// Profile Page in Dark theme
export const ProfileReadOnlyDark: Story = {
  args: {},
};
ProfileReadOnlyDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    profile: {
      isLoading: false,
      readOnly: true,
      data: {
        firstname: "John",
        lastname: "Doe",
        age: 30,
        city: "New York",
        username: "johndoe123",
        avatar: "https://example.com/avatar.jpg",
        currency: Currency.UAH,
        country: Country.Ukraine,
      },
    },
  }),
];

// Profile Page in Dark theme
export const ProfileLoading: Story = {
  args: {},
};
ProfileLoading.decorators = [
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    profile: {
      isLoading: true,
      readOnly: false,
    },
  }),
];

// Profile Page in Dark theme
export const ProfileLoadingDark: Story = {
  args: {},
};
ProfileLoadingDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: "",
      password: "",
      isLoading: false,
    },
    counter: { value: 0 },
    user: {},
    profile: {
      isLoading: true,
      readOnly: false,
    },
  }),
];
