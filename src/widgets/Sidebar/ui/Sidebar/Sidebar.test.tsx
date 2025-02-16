import { Sidebar } from "./Sidebar";
import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";

describe("Sidebar", () => {
  it("renders Sidebar with the correct structure", () => {
    componentRender(<Sidebar />, {
      initialState: {
        counter: { value: 10 },
        user: { _isInited: false },
      },
    });

    // Test if the sidebar is rendered (using the data-testid attribute)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    // Test if the Button inside Sidebar renders with the correct text
    expect(screen.getByTestId("sidebar-toggler")).toHaveTextContent("<");
  });
  it('toggles the "collapsed" class when the toggle button is clicked', async () => {
    componentRender(<Sidebar />, {
      initialState: {
        counter: { value: 10 },
        user: { _isInited: false },
      },
    });

    const sidebar = await screen.findByTestId("sidebar");
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
    componentRender(<Sidebar />, {
      initialState: {
        counter: { value: 10 },
        user: { _isInited: false },
      },
    });

    // Check if ThemeSwitcher and LangSwitcher are rendered
    expect(screen.getByTestId("theme-switcher")).toBeInTheDocument();
    expect(screen.getByTestId("lang-switcher")).toBeInTheDocument();
  });
});
