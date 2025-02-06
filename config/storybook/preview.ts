import type { Preview } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import "../../src/shared/config/i18n/i18n";
import { I18nDecorator } from "shared/config/storybook/I18nDecorator/I18nDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const preview: Preview = {
  decorators: [
    (Story) => Story(StyleDecorator),
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    I18nDecorator,
    StoreDecorator({
      loginForm: { username: "", password: "", isLoading: false },
      counter: { value: 0 },
      user: {},
      profile: { isLoading: false, readonly: false },
    }),
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
