import React, { Suspense } from "react";
import i18n from "shared/config/i18n/i18n";
import { I18nextProvider } from "react-i18next";
import { Decorator } from "@storybook/react";

export const I18nDecorator: Decorator = (Story) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>loading translations...</div>}>
        <Story />
      </Suspense>
    </I18nextProvider>
  );
};
