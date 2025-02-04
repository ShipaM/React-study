import { fireEvent, render, screen } from "@testing-library/react";
import ThemeProvider from "./ThemeProvider";
import { ThemeContext, Theme } from "../lib/ThemeContext";
import React, { act, useContext } from "react";

describe("ThemeProvider", () => {
  test("provides the default theme", () => {
    let receivedTheme;
    const TestComponent = () => {
      const { theme } = useContext(ThemeContext);
      receivedTheme = theme;
      return <div data-testid="theme-provider">{theme}</div>;
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(receivedTheme).toBe(Theme.LIGHT);
    expect(screen.getByTestId("theme-provider")).toHaveTextContent(Theme.LIGHT);
  });

  test("uses initialTheme if provided", () => {
    let receivedTheme;
    const TestComponent = () => {
      const { theme } = useContext(ThemeContext);
      receivedTheme = theme;
      return <div data-testid="theme-provider">{theme}</div>;
    };

    render(
      <ThemeProvider initialTheme={Theme.DARK}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(receivedTheme).toBe(Theme.DARK);
    expect(screen.getByTestId("theme-provider")).toHaveTextContent(Theme.DARK);
  });

  test("allows changing the theme", () => {
    const TestComponent = () => {
      const { theme, setTheme } = useContext(ThemeContext);
      return (
        <div>
          <span data-testid="theme-provider">{theme}</span>
          <button onClick={() => setTheme(Theme.DARK)}>Change Theme</button>
        </div>
      );
    };

    render(
      <ThemeProvider initialTheme={Theme.LIGHT}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-provider")).toHaveTextContent(Theme.LIGHT);
    act(() => {
      fireEvent.click(screen.getByRole("button"));
    });
    expect(screen.getByTestId("theme-provider")).toHaveTextContent(Theme.DARK);
  });
});
