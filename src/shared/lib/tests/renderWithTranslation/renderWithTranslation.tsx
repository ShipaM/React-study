import { ReactNode } from "react";
import React from "react";

import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { MemoryRouter } from "react-router-dom";

export function renderWithTranslation(component: ReactNode) {
  return render(
    <MemoryRouter>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>,
    </MemoryRouter>
  );
}
