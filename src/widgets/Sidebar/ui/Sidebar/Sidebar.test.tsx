import { Sidebar } from "./Sidebar";
import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
  it("renders Sidebar with the correct structure", () => {
    renderWithTranslation(<Sidebar />);

    // Test if the sidebar is rendered (using the data-testid attribute)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    // Test if the Button inside Sidebar renders with the correct text
    expect(screen.getByTestId("sidebar-toggler")).toHaveTextContent("<");
  });

  it('toggles the "collapsed" class when the toggle button is clicked', () => {
    renderWithTranslation(<Sidebar />);

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
    renderWithTranslation(<Sidebar />);

    // Check if ThemeSwitcher and LangSwitcher are rendered
    expect(screen.getByTestId("theme-switcher")).toBeInTheDocument();
    expect(screen.getByTestId("lang-switcher")).toBeInTheDocument();
  });
});
