import { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";
import { Comment } from "../../model/types/comment";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// Mock comments data
const mockComments: Comment[] = [
  {
    id: "1",
    text: "This is a great article!",
    user: { id: "1", username: "admin", password: "123" },
  },
  {
    id: "2",
    text: "I learned a lot from this post!",
    user: { id: "2", username: "user", password: "123" },
  },
];

const meta: Meta<typeof CommentList> = {
  title: "entities/CommentList",
  component: CommentList,
  parameters: {
    layout: "centered", // Center the component in the preview
  },
  tags: ["autodocs"], // Enable auto documentation
  args: {
    comments: mockComments,
    isLoading: false,
  },
  argTypes: {
    comments: { control: { type: "object" } },
    isLoading: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

// Default Story (with comments)
export const Default: Story = {
  args: {
    comments: mockComments,
    isLoading: false,
  },
};
Default.decorators = [StoreDecorator({})];

export const DefaultDark: Story = {
  args: {
    comments: mockComments,
    isLoading: false,
  },
};
DefaultDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const DefaultOrange: Story = {
  args: {
    comments: mockComments,
    isLoading: false,
  },
};
DefaultOrange.decorators = [StoreDecorator({}), ThemeDecorator(Theme.ORANGE)];

// Loading State
export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};
Loading.decorators = [
  StoreDecorator({
    articleDetailsComments: {
      isLoading: true,
      ids: [],
      entities: {},
    },
  }),
];

// Empty State (No comments)
export const Empty: Story = {
  args: {
    comments: [],
    isLoading: false,
  },
};
Empty.decorators = [StoreDecorator({})];
