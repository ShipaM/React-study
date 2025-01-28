import type { Preview } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import "../../src/shared/config/i18n/i18n";

const preview: Preview = {
  decorators: [
    (Story) => Story(StyleDecorator),
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
  ],
  parameters: {
    __IS_DEV__: true,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "ua", title: "Ukranian" },
      ],
      showName: true,
    },
  },
};
