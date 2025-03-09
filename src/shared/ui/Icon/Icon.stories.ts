import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import CalendarIcon from "shared/assets/icons/calendar-20-20.svg";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Icon> = {
  title: "Shared/Icon",
  component: Icon,
  parameters: {
    layout: "centered", // Centers the component in Storybook
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    Svg: CalendarIcon,
  },
};

export const DefaultDark: Story = {
  args: {
    Svg: CalendarIcon,
  },
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DefaultOrange: Story = {
  args: {
    Svg: CalendarIcon,
  },
};
DefaultOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const WithCustomClass: Story = {
  args: {
    Svg: EyeIcon,
    className: "custom-class",
  },
};
