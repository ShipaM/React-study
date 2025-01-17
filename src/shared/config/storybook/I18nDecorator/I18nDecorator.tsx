import React, { Suspense, useEffect } from "react";
import i18n from "shared/config/i18n/i18n";
import { I18nextProvider } from "react-i18next";
import { StoryFn } from "storybook/internal/types";

// RouterDecorator for wrapping stories with Router
export const I18nDecorator = (
  StoryComponent: StoryFn,
  context: { globals: { locale: string } }
) => {
  const { locale } = context.globals;

  // When the locale global changes
  // Set the new locale in i18n
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        {/* @ts-expect-error: TypeScript cannot infer JSX component type properly */}
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  );
};
