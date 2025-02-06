import { render, fireEvent } from "@testing-library/react";
import { LangSwitcher } from "./LangSwitcher";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18nForTests";

describe("LangSwitcher", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(
      <I18nextProvider i18n={i18n}>
        <LangSwitcher />
      </I18nextProvider>
    );

    expect(getByTestId("lang-switcher")).toBeInTheDocument();
  });

  test("toggles language on click", async () => {
    const { getByTestId } = render(
      <I18nextProvider i18n={i18n}>
        <LangSwitcher />
      </I18nextProvider>
    );
    const button = getByTestId("lang-switcher");

    const initialLanguage = i18n.language;

    await fireEvent.click(button);
    expect(i18n.language).not.toBe(initialLanguage);

    await fireEvent.click(button);
    expect(i18n.language).toBe(initialLanguage);
  });
});
