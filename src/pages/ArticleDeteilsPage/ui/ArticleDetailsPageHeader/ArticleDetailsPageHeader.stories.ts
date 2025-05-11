import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import { within, expect } from "@storybook/test";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { articleDetailsData } from "shared/lib/tests/mocks/articleMock";
import { Article } from "entities/Article";

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  title: "pages/ArticleDetailsPage/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS class for custom styling.",
    },
  },
};

const baseStore = {
  loginForm: {
    username: "",
    password: "",
    isLoading: false,
  },
  counter: { value: 0 },
  user: {},
  articleDetails: {
    error: undefined,
    isLoading: false,
    data: articleDetailsData as Article,
  },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Default: Story = {
  args: {},
};
Default.decorators = [StoreDecorator({ ...baseStore })];

export const DefaultDark: Story = {
  args: {},
};
DefaultDark.decorators = [
  StoreDecorator({ ...baseStore }),
  ThemeDecorator(Theme.DARK),
];

export const WithEditPermission: Story = {
  args: {
    className: "with-edit-permission",
  },
};
WithEditPermission.decorators = [
  StoreDecorator({
    ...baseStore,
    user: { authData: { id: "1", username: "admin", password: "123" } },
  }),
];

export const WithEditPermissionDark: Story = {
  args: {
    className: "with-edit-permission",
  },
};
WithEditPermissionDark.decorators = [
  StoreDecorator({
    ...baseStore,
    user: { authData: { id: "1", username: "admin", password: "123" } },
  }),
  ThemeDecorator(Theme.DARK),
];

// 🧪 Test story with automated interaction testing
export const Test: Story = {
  args: {
    className: "test-header",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const headerElement = await canvas.getByTestId(
      "article-details-page-header"
    );
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("test-header");

    const backButton = await canvas.getByTestId("back-to-list-button");
    expect(backButton).toBeInTheDocument();

    await backButton.click();

    const editButton = await canvas.getByTestId("edit-article-button");
    if (editButton) {
      expect(editButton).toBeInTheDocument();
      await editButton.click();
    }
  },
};
Test.decorators = [
  StoreDecorator({
    ...baseStore,
    user: { authData: { id: "1", username: "admin", password: "123" } }, 
  }),
];
