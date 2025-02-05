import { Sidebar } from "./Sidebar";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";

describe("Sidebar", () => {
  it("renders Sidebar with the correct structure", () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18nForTests}>
          <Sidebar />
        </I18nextProvider>
      </MemoryRouter>
    );
    // Test if the sidebar is rendered (using the data-testid attribute)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    // Test if the Button inside Sidebar renders with the correct text
    expect(screen.getByTestId("sidebar-toggler")).toHaveTextContent("<");
  });

  it('toggles the "collapsed" class when the toggle button is clicked', () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18nForTests}>
          <Sidebar />
        </I18nextProvider>
      </MemoryRouter>
    );

    const sidebar = screen.getByTestId("sidebar");
    const toggleButton = screen.getByTestId("sidebar-toggler");

    // Ensure that the sidebar is not collapsed initially
    expect(sidebar).not.toHaveClass("collapsed");

    // Click the toggle button to collapse the sidebar
    fireEvent.click(toggleButton);

    // After the first click, the sidebar should have the "collapsed" class
    expect(sidebar).toHaveClass("collapsed");

    // Click the toggle button again to expand the sidebar
    fireEvent.click(toggleButton);

    // After the second click, the sidebar should not have the "collapsed" class
    expect(sidebar).not.toHaveClass("collapsed");
  });

  it("renders child components (ThemeSwitcher and LangSwitcher)", () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18nForTests}>
          <Sidebar />
        </I18nextProvider>
      </MemoryRouter>
    );

    // Check if ThemeSwitcher and LangSwitcher are rendered
    expect(screen.getByTestId("theme-switcher")).toBeInTheDocument();
    expect(screen.getByTestId("lang-switcher")).toBeInTheDocument();
  });
});
