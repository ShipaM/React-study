import React, { Suspense } from "react";
import i18n from "shared/config/i18n/i18n";
import { I18nextProvider } from "react-i18next";
import { StoryFn } from "storybook/internal/types";

// RouterDecorator for wrapping stories with Router
export const I18nDecorator = (StoryComponent: StoryFn) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>loading translations...</div>}>
        {/* @ts-expect-error: TypeScript cannot infer JSX component type properly */}
        <StoryComponent />
      </Suspense>
    </I18nextProvider>
  );
};
